//รู้ผลทันทีเลย
const a = 1 + 1;
console.log(a); //2

//โครงสร้างพื้นฐานของ Promise
const myPromise = new Promise((resolve, reject) => {
  //ทำงานบางอย่าง
  resolve("สำเร็จ");
  //หรือ
  reject("ไม่สำเร็จ");
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
