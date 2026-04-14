//คลาสนี้ extends มาจาก Person ใช้ super เพื่อดึงโครงสร้างเดิมมา
// และเราเพิ่ม method showProfile เพื่อให้แสดงข้อมูลเฉพาะตัว
// ซึ่งเป็นหลักการของ Polymorphism (มี method ชื่อคล้ายกัน แต่ทำงานต่างกันในแต่ละคลาส)

const Person = require("./Person");

class Student extends Person {
  constructor(studentId, name, age, gradeLevel) {
    super(name, age); //ส่ง name, age ไปให้คลาสแม่(Person)
    this.studentId = studentId; //รหัสนักเรียน(เฉพาะของนักเรียน)
    this.gradeLevel = gradeLevel; //ชั้นปี(เฉพาะของนักเรียน)
  }

  //Method แสดงข้อมูลของนักเรียน
  showProfile() {
    console.log(
      `🧑‍🎓 นักเรียน: ${this.name} | รหัส: ${this.studentId} | ชั้นปี: ${this.gradeLevel}`,
    );
  }
}
module.exports = Student;
