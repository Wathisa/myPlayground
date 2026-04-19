// ตัวแปรเก็บสถานะเกม
let score = 0; // คะแนนรวมที่ผู้เล่นมีในตอนนี้
let clickPower = 1; // จำนวนพลังที่ได้ต่อการกด 1 ครั้ง
let autoRate = 0; // จำนวนพลังที่เพิ่มอัตโนมัติในทุก 1 วินาที

// ตั้งราคาเริ่มต้นทั้ง 5 ไอเทม
let cost1 = 20; // ราคาเริ่มต้นของอัปเกรดชิ้นที่ 1
let cost2 = 65; // ราคาเริ่มต้นของอัปเกรดชิ้นที่ 2
let cost3 = 200; // ราคาเริ่มต้นของอัปเกรดชิ้นที่ 3
let cost4 = 800; // ราคาเริ่มต้นของอัปเกรดชิ้นที่ 4
let cost5 = 2500; // ราคาเริ่มต้นของอัปเกรดชิ้นที่ 5

const scoreDisplay = document.getElementById("scoreDisplay"); // อ้างอิงตำแหน่งที่ใช้แสดงคะแนน
const rateDisplay = document.getElementById("rateDisplay"); // อ้างอิงตำแหน่งที่ใช้แสดง auto power
const clickPowerDisplay = document.getElementById("clickPowerDisplay"); // อ้างอิงตำแหน่งที่ใช้แสดงพลังต่อคลิก
const clickButton = document.getElementById("clickButton"); // อ้างอิงปุ่มหลักที่ผู้เล่นใช้คลิก

// อัปเดตหน้าจอทั้งหมด
function updateUI() {
  scoreDisplay.innerText = score; // แสดงคะแนนล่าสุดบนหน้าเว็บ
  rateDisplay.innerText = autoRate; // แสดงค่า auto power ล่าสุด
  clickPowerDisplay.innerText = `${clickPower} power / click`; // แสดงค่าพลังที่ได้ต่อคลิก

  // อัปเดตราคาบนปุ่ม
  document.getElementById("cost1").innerText = cost1; // อัปเดตราคาอัปเกรดชิ้นที่ 1
  document.getElementById("cost2").innerText = cost2; // อัปเดตราคาอัปเกรดชิ้นที่ 2
  document.getElementById("cost3").innerText = cost3; // อัปเดตราคาอัปเกรดชิ้นที่ 3
  document.getElementById("cost4").innerText = cost4; // อัปเดตราคาอัปเกรดชิ้นที่ 4
  document.getElementById("cost5").innerText = cost5; // อัปเดตราคาอัปเกรดชิ้นที่ 5

  // เช็คเงื่อนไขล็อคปุ่ม
  document.getElementById("buyUpgrade1").disabled = score < cost1; // ปิดปุ่มถ้าคะแนนยังไม่พอซื้ออัปเกรด 1
  document.getElementById("buyUpgrade2").disabled = score < cost2; // ปิดปุ่มถ้าคะแนนยังไม่พอซื้ออัปเกรด 2
  document.getElementById("buyUpgrade3").disabled = score < cost3; // ปิดปุ่มถ้าคะแนนยังไม่พอซื้ออัปเกรด 3
  document.getElementById("buyUpgrade4").disabled = score < cost4; // ปิดปุ่มถ้าคะแนนยังไม่พอซื้ออัปเกรด 4
  document.getElementById("buyUpgrade5").disabled = score < cost5; // ปิดปุ่มถ้าคะแนนยังไม่พอซื้ออัปเกรด 5
}

// ระบบคลิกคทาเซเลอร์มูนนน
clickButton.addEventListener("click", () => {
  score += clickPower; // เพิ่มคะแนนตามค่าพลังต่อคลิก
  updateUI(); // รีเฟรชหน้าจอหลังคลิก
});

// อัปเกรด1 สารเคมี X
document.getElementById("buyUpgrade1").addEventListener("click", () => {
  if (score >= cost1) {
    // ตรวจว่าคะแนนพอจะซื้อหรือไม่
    score -= cost1; // หักคะแนนตามราคาของอัปเกรด
    clickPower += 1; // เพิ่มพลังต่อคลิก 1 หน่วย
    cost1 = Math.floor(cost1 * 2.5); // ปรับราคาใหม่ให้แพงขึ้นสำหรับครั้งถัดไป
    updateUI(); // อัปเดตค่าทั้งหมดบนหน้าจอ
  }
});

// อัปเกรด2: คฑาแห่งดวงดาว
document.getElementById("buyUpgrade2").addEventListener("click", () => {
  if (score >= cost2) {
    // ตรวจว่าคะแนนพอจะซื้อหรือไม่
    score -= cost2; // หักคะแนนตามราคาของอัปเกรด
    autoRate += 1; // เพิ่มพลังอัตโนมัติ 1 หน่วยต่อวินาที
    cost2 = Math.floor(cost2 * 1.5); // ปรับราคาใหม่ให้แพงขึ้นสำหรับครั้งถัดไป
    updateUI(); // อัปเดตค่าทั้งหมดบนหน้าจอ
  }
});

// อัปเกรด3 แมวเหมียวลูน่า
document.getElementById("buyUpgrade3").addEventListener("click", () => {
  if (score >= cost3) {
    // ตรวจว่าคะแนนพอจะซื้อหรือไม่
    score -= cost3; // หักคะแนนตามราคาของอัปเกรด
    autoRate += 5; // เพิ่มพลังอัตโนมัติ 5 หน่วยต่อวินาที
    cost3 = Math.floor(cost3 * 1.5); // ปรับราคาใหม่ให้แพงขึ้นสำหรับครั้งถัดไป
    updateUI(); // อัปเดตค่าทั้งหมดบนหน้าจอ
  }
});

// อัปเกรด4 โคลว์การ์ด
document.getElementById("buyUpgrade4").addEventListener("click", () => {
  if (score >= cost4) {
    // ตรวจว่าคะแนนพอจะซื้อหรือไม่
    score -= cost4; // หักคะแนนตามราคาของอัปเกรด
    autoRate += 20; // เพิ่มพลังอัตโนมัติ 20 หน่วยต่อวินาที
    cost4 = Math.floor(cost4 * 1.5); // ปรับราคาใหม่ให้แพงขึ้นสำหรับครั้งถัดไป
    updateUI(); // อัปเดตค่าทั้งหมดบนหน้าจอ
  }
});

// อัปเกรด5 พลังมิตรภาพทะลุมิติ
document.getElementById("buyUpgrade5").addEventListener("click", () => {
  if (score >= cost5) {
    // ตรวจว่าคะแนนพอจะซื้อหรือไม่
    score -= cost5; // หักคะแนนตามราคาของอัปเกรด
    autoRate += 100; // เพิ่มพลังอัตโนมัติ 100 หน่วยต่อวินาที
    cost5 = Math.floor(cost5 * 1.5); // ปรับราคาใหม่ให้แพงขึ้นสำหรับครั้งถัดไป
    updateUI(); // อัปเดตค่าทั้งหมดบนหน้าจอ
  }
});

// ระบบอัตโนมัติ ทำงานทุก 1 วินาที
setInterval(() => {
  if (autoRate > 0) {
    // ทำงานต่อเมื่อมีค่า auto power มากกว่า 0
    score += autoRate; // เพิ่มคะแนนตามค่า auto power
    updateUI(); // อัปเดตหน้าจอทุกครั้งที่คะแนนเปลี่ยน
  }
}, 1000); // หน่วงเวลา 1000 มิลลิวินาที หรือ 1 วินาที

// เรียกใช้ฟังก์ชันครั้งแรกตอนเริ่มเกม
updateUI(); // แสดงค่าเริ่มต้นทั้งหมดทันทีเมื่อโหลดหน้าเว็บ
