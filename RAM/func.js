let cart = JSON.parse(localStorage.getItem('cart')) || [];

// เพิ่ม event listener ให้กับปุ่ม "ADD +"
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.dataset.name;  // ดึงชื่อสินค้า
        const price = this.dataset.price; // ดึงราคา

        // เพิ่มสินค้าเข้าไปในตะกร้า
        cart.push({ name, price });

        // อัปเดต localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // แจ้งเตือนเมื่อเพิ่มสินค้า
        alert(name + ' has been added to the cart!');

        // เปลี่ยนไปยังหน้า Checkout.html
        window.location.href = "../Checkout/Checkout.html"; // เปลี่ยนเส้นทางไปที่ Checkout.html
    });
});