//callback function

function calaulate(x, y, callback) {
  console.log("กำลังคำนวณ....");
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

function display(result) {
  console.log(`ผลบวก = ${result}`);
}

//ฟังก์ชั่นแบบ callback
calaulate(100, 50, display);
