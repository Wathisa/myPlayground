// 1. สร้าง "ตัวแปร" (กล่องเก็บข้อมูล) เพื่อจำค่าต่างๆ ของเกม
let score = 0; // คะแนนปัจจุบัน เริ่มที่ 0
let idleRate = 0; // จำนวนคะแนนที่เพิ่มอัตโนมัติต่อวินาที เริ่มที่ 0
let upgradeCost = 10; // ราคาของอัปเกรดชิ้นแรก เริ่มที่ 10 คะแนน

// 2. ดึงองค์ประกอบจาก HTML มาไว้ในตัวแปรของ JS เพื่อสั่งงานมัน
const scoreDisplay = document.getElementById("scoreDisplay");
const rateDisplay = document.getElementById("rateDisplay");
const clickButton = document.getElementById("clickButton");
const buyIdleBtn = document.getElementById("buyIdleBtn");

// 3. ฟังก์ชันสำหรับ "อัปเดตหน้าจอ" ให้ตัวเลขแสดงตรงกับความจริง
function updateUI() {
  scoreDisplay.innerText = score;
  rateDisplay.innerText = idleRate;
  // อัปเดตข้อความบนปุ่มซื้อของให้แสดงราคาที่ถูกต้อง
  buyIdleBtn.innerText = `ซื้อผู้ช่วยคลิก (ราคา: ${upgradeCost} แต้ม)`;
}

// 4. สั่งให้ปุ่มหลักทำงาน (เมื่อถูก "คลิก")
clickButton.addEventListener("click", function () {
  score += 1; // เอาคะแนนปัจจุบันมาบวกเพิ่ม 1
  updateUI(); // เรียกฟังก์ชันอัปเดตหน้าจอ
});

// 5. สั่งให้ปุ่มซื้อของทำงาน (เมื่อถูก "คลิก")
buyIdleBtn.addEventListener("click", function () {
  // เช็คเงื่อนไขก่อนว่า "คะแนนเรามีมากกว่าหรือเท่ากับราคาของไหม?"
  if (score >= upgradeCost) {
    score -= upgradeCost; // หักคะแนนเราออกตามราคาสินค้า
    idleRate += 1; // เพิ่มอัตราการผลิตอัตโนมัติขึ้น 1 แต้มต่อวินาที

    // ทำให้เกมท้าทายขึ้นโดยการ "เพิ่มราคาสินค้า" ชิ้นต่อไป
    upgradeCost = Math.floor(upgradeCost * 1.5);
    // (Math.floor คือการปัดเศษทิ้ง เช่น 15.5 จะกลายเป็น 15)

    updateUI(); // อัปเดตหน้าจอ
  } else {
    // ถ้าคะแนนไม่พอ ให้เด้งแจ้งเตือน
    alert("คะแนนไม่พอจ้า! ต้องคลิกเพิ่มอีกนะ");
  }
});

// 6. ระบบ Idle (ทำงานอัตโนมัติ)
// setInterval คือฟังก์ชันของ JS ที่สั่งให้ทำซ้ำๆ ตามเวลาที่กำหนด
setInterval(function () {
  if (idleRate > 0) {
    score += idleRate; // เอาคะแนนมาบวกกับอัตราผลิตอัตโนมัติ
    updateUI(); // อัปเดตหน้าจอ
  }
}, 1000); // เลข 1000 หมายถึง 1000 มิลลิวินาที (เท่ากับ 1 วินาที)
