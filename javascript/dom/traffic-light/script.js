const input = document.getElementById("lightInput");
const button = document.getElementById("checkBtn");
const lightName = document.getElementById("lightName");
const lightAction = document.getElementById("lightAction");

button.addEventListener("click", function () {
  const color = input.value.trim();

  if (color === "แดง") {
    lightName.innerText = "ไฟแดง";
    lightName.style.color = "red";
    lightAction.innerText = "หยุดเดี๋ยวนี้เลยนะ!!!";
  } else if (color === "เหลือง") {
    lightName.innerText = "ไฟเหลือง";
    lightName.style.color = "orange";
    lightAction.innerText = "ชะลอความเร็ว";
  } else if (color === "เขียว") {
    lightName.innerText = "ไฟเขียว";
    lightName.style.color = "green";
    lightAction.innerText = "ซิ่งเลยจ้าาาาา~";
  } else {
    lightName.innerText = "ไม่พบข้อมูล";
    lightName.style.color = "black";
    lightAction.innerText = "กรุณาพิมพ์: แดง, เหลือง หรือ เขียว";
  }
});
