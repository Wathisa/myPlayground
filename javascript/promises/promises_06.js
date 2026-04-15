const myPromise = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("ครบ 2 วินาที");
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
