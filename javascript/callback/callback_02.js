//callback function
// เหมือนไฟล์ 01 แต่รวมฟังก์ชัน display ไว้ด้วยกันเลย

function calaulate(x, y, callback) {
  console.log("กำลังคำนวณ....");
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

//ฟังก์ชั่นแบบ callback
calaulate(100, 50, function (result) {
  console.log(`ผลบวก = ${result}`);
});
