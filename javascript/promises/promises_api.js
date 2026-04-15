const getUser = new Promise((resolve, reject) => {
  const success = true; // เปลี่ยนเป็น false เพื่อทดสอบการ reject
  setInterval(() => {
    if (success) {
      resolve({
        id: 1,
        name: "John Doe",
        age: 30,
      });
    } else {
      reject("โหลด user ไม่สำเร็จ");
    }
  }, 2000);
});

getUser
  .then((user) => {
    console.log("ข้อมูล user:", user);
    console.log("ชื่อ:", user.name);
  })
  .catch((error) => {
    console.log("เกิดข้อผิดพลาด:", error);
  });
