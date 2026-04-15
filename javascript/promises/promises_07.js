const isShopOpen = true;

const orderCoffee = new Promise((resolve, reject) => {
  if (isShopOpen) {
    resolve("สั่งกาแฟสำเร็จ");
  } else {
    reject("ร้านปิดอยู่");
  }
});

orderCoffee
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
