function openDetails(image, title, description, price) {
    document.getElementById('product-image').src = image;
    document.getElementById('product-title').textContent = title;
    document.getElementById('product-description').textContent = description;
    document.getElementById('product-price').textContent = '$' + price;
    document.getElementById('product-details').classList.add('visible');
    document.getElementById('product-size').size=100;
}
const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn.onclick = () => {
        const queryParams = new URLSearchParams({
            title: title,
            description: description,
            price: price,
            image: image,
            size: 100,
        }).toString();
        window.location.href = "buy now page 1.html";
    };

function closeDetails() {
    document.getElementById('product-details').classList.remove('visible');
}