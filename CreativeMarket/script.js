// 1. ชี้เป้าไปที่แถบเมนูของเรา
const navbar = document.querySelector(".navbar");

// 2. สั่งให้ระบบคอยจับตาดูการ "เลื่อนหน้าจอ" (scroll) ของหน้าต่างเบราว์เซอร์
window.addEventListener("scroll", () => {
  // 3. เช็คว่าตำแหน่งหน้าจอเลื่อนลงมาเกิน 50 พิกเซลแล้วหรือยัง?
  if (window.scrollY > 50) {
    // ถ้าเลื่อนลงมาเกิน 50px แล้ว ให้ "เพิ่ม" คลาส 'scrolled' เข้าไปในเมนู
    navbar.classList.add("scrolled");
  } else {
    // แต่ถ้าเลื่อนกลับขึ้นไปบนสุด (น้อยกว่า 50px) ให้ "ถอด" คลาส 'scrolled' ออก
    navbar.classList.remove("scrolled");
  }
});
