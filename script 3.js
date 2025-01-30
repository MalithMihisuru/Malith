function openProductPage(image, title, description, price) {
    const queryParams = new URLSearchParams({
        title: title,
        description: description,
        price: price,
        image: image
    }).toString();
    window.location.href = `product-details.html?${queryParams}`;
}
function openDetails(image, title, description, price) {
    document.getElementById('product-image').src = image;
    document.getElementById('product-title').textContent = title;
    document.getElementById('product-description').textContent = description;
    document.getElementById('product-price').textContent = '$' + price;
    document.getElementById('product-details').classList.add('visible');
}
const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn.onclick = () => {
        const queryParams = new URLSearchParams({
            title: title,
            description: description,
            price: price,
            image: image
        }).toString();
        window.location.href = "buy now page 1.html#";
    };

function closeDetails() {
    document.getElementById('product-details').classList.remove('visible');
}