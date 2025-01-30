function openProductPage(image, title, description, price) {
    const queryParams = new URLSearchParams({
        title: title,
        description: description,
        price: price,
        image: image
    }).toString();
    window.location.href = `product-details.html?${queryParams}`;
}