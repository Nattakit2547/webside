// ดึงข้อมูลจาก localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// หา container ที่จะแสดงรายการสินค้า
const cartItemsContainer = document.getElementById('cart-items');
let totalPrice = 0;

// ตรวจสอบว่ามีสินค้าในตะกร้าหรือไม่
if (cart.length > 0) {
    cart.forEach(item => {
        // สร้าง div สำหรับแสดงรายการสินค้า
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `<span>${item.name}</span> - <span>${item.price} Baht</span>`;
        cartItemsContainer.appendChild(itemElement);

        // คำนวณราคารวม
        totalPrice += parseInt(item.price);
    });
} else {
    // ถ้าไม่มีสินค้าในตะกร้า
    const emptyMessage = document.createElement('div');
    emptyMessage.textContent = "Your cart is empty.";
    cartItemsContainer.appendChild(emptyMessage);
}

// แสดงราคารวม
document.getElementById('total-price').textContent = totalPrice + " Baht";

// ฟังก์ชันเคลียร์ตะกร้า
document.getElementById('clear-cart-btn').addEventListener('click', function() {
    localStorage.removeItem('cart');
    cartItemsContainer.innerHTML = '';
    document.getElementById('total-price').textContent = "0 Baht";
    alert('ตะกร้าสินค้าถูกเคลียร์แล้ว');
});

// ฟังก์ชันชำระเงิน
document.getElementById('checkout-btn').addEventListener('click', function() {
    // เคลียร์ตะกร้า
    localStorage.removeItem('cart'); 
    cartItemsContainer.innerHTML = ''; 
    document.getElementById('total-price').textContent = "0 Baht";
    
    // แสดงป็อปอัพ
    document.getElementById('payment-popup').style.display = 'block';
});

// ปิดป็อปอัพ
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('payment-popup').style.display = 'none';
});