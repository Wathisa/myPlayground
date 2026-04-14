//คลาสนี้ extends มาจาก Person เหมือนกับ Student

const Person = require("./Person");

class Teacher extends Person {
  constructor(teacherId, name, age, subject) {
    super(name, age);
    this.teacherId = teacherId; //รหัสครู
    this.subject = subject; //วิชาที่สอน
  }

  showProfile() {
    console.log(`👩‍🏫 ครูผู้สอน: ${this.name} | วิชาที่สอน: ${this.subject}`);
  }
}
module.exports = Teacher;
