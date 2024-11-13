document.getElementById('order-button').addEventListener('click', () => {
    const selectedItems = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(item => item.value);

    if (selectedItems.length === 0) {
        alert('Please select at least one item.');
        return;
    }

    // Show loading spinner and reset order info
    const orderInfo = document.getElementById('order-info');
    const loadingSpinner = document.getElementById('loading-spinner');
    orderInfo.style.display = 'block';
    loadingSpinner.style.display = 'block';
    document.getElementById('order-id').textContent = '';
    document.getElementById('food-image').innerHTML = '';

    // Simulate the food preparation time with a promise
    const prepareOrder = new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 5 + 2) * 1000; // Random time between 2 to 6 seconds
        setTimeout(function () {
            resolve(selectedItems);
        }, preparationTime);
    });

    prepareOrder.then(items => {
        // After the promise is resolved, hide the loading spinner
        loadingSpinner.style.display = 'none';

        // Generate a unique order ID
        const orderId = 'BK' + Math.floor(Math.random() * 10000);

        // Display the order ID
        document.getElementById('order-id').textContent = 'Order ID: ' + orderId;

        // Display the food images based on selected items
        const foodImages = items.map(item => `<img src="images/${item}.jpg" alt="${item}" />`).join('');
        document.getElementById('food-image').innerHTML = foodImages;
    });
});
