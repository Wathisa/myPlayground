const myPromise = new Promise((resolve, reject) => {
  //ทำงานบางอย่าง
  resolve("สำเร็จ");
});

myPromise
  .then((result) => {
    console.log("ผลลัพธ์", result);
  })
  .catch((error) => console.log("มีปัญหา", error));
