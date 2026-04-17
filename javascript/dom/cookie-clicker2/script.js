// ตัวแปรเก็บสถานะเกม
let score = 0;
let clickPower = 1; // พลังจากการคลิก 1 ครั้ง (เริ่มต้นที่ 1)
let autoRate = 0; // พลังงานที่ผลิตอัตโนมัติต่อวินาที

// ราคาของอัปเกรดแต่ละอย่าง
let cost1 = 15;
let cost2 = 100;
let cost3 = 500;

// ดึงการเชื่อมต่อหน้าจอ HTML มาไว้ใน JS
const scoreDisplay = document.getElementById("scoreDisplay");
const rateDisplay = document.getElementById("rateDisplay");
const clickPowerDisplay = document.getElementById("clickPowerDisplay");
const clickButton = document.getElementById("clickButton");

// ฟังก์ชันอัปเดตตัวเลขบนหน้าจอทั้งหมด
function updateUI() {
  scoreDisplay.innerText = score;
  rateDisplay.innerText = autoRate;
  clickPowerDisplay.innerText = `${clickPower} หน่วย / คลิก`;

  // อัปเดตราคาสินค้าบนปุ่ม
  document.getElementById("cost1").innerText = cost1;
  document.getElementById("cost2").innerText = cost2;
  document.getElementById("cost3").innerText = cost3;
}

// ระบบคลิกเป้าหมายหลัก
clickButton.addEventListener("click", () => {
  score += clickPower; // บวกคะแนนตามพลังคลิกที่เรามี
  updateUI();
});

// อัปเกรด 1: ทหารราบ (+1 พลังคลิก)
document.getElementById("buyUpgrade1").addEventListener("click", () => {
  if (score >= cost1) {
    score -= cost1;
    clickPower += 1; // เพิ่มพลังคลิก!
    cost1 = Math.floor(cost1 * 1.5); // เพิ่มราคาขึ้น 50%
    updateUI();
  } else {
    alert("พลังงานไม่พอ! ต้องการ " + cost1);
  }
});

// อัปเกรด 2: โดรน (+1 ออโต้)
document.getElementById("buyUpgrade2").addEventListener("click", () => {
  if (score >= cost2) {
    score -= cost2;
    autoRate += 1; // เพิ่มออโต้!
    cost2 = Math.floor(cost2 * 1.5);
    updateUI();
  } else {
    alert("พลังงานไม่พอ! ต้องการ " + cost2);
  }
});

// อัปเกรด 3: รถถัง (+5 ออโต้)
document.getElementById("buyUpgrade3").addEventListener("click", () => {
  if (score >= cost3) {
    score -= cost3;
    autoRate += 5; // เพิ่มออโต้ทีละ 5!
    cost3 = Math.floor(cost3 * 1.5);
    updateUI();
  } else {
    alert("พลังงานไม่พอ! ต้องการ " + cost3);
  }
});

// ระบบอัตโนมัติ ทำงานทุกๆ 1 วินาที (1000 ms)
setInterval(() => {
  if (autoRate > 0) {
    score += autoRate;
    updateUI();
  }
}, 1000);
