document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const price = this.querySelector('input[type="number"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const imageInput = this.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0];

    if (!imageFile || !phone) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const productList = document.getElementById("productList");
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${e.target.result}" alt="صورة المنتج" />
            <h3>${name}</h3>
            <p>السعر: ${price} ل.س</p>
            <a href="https://wa.me/${phone}?text=أرغب بشراء المنتج: ${name}" target="_blank">تواصل عبر واتساب</a>
        `;
        productList.appendChild(card);
    };
    reader.readAsDataURL(imageFile);

    this.reset();
});
