//เราสร้าง Person เป็น Parent Class เพื่อเก็บคุณสมบัติที่คนต้องมีเหมือนกันคือ ชื่อ และ อายุ
// จะได้ไม่ต้องเขียนซ้ำซ้อนในคลาสอื่น เป็นการใช้หลักการ Inheritance

class Person {
  // constructor รับข้อมูลเริ่มต้นตอนสร้าง Object
  constructor(name, age) {
    this.name = name; //เก็บชื่อ
    this.age = age; //เก็บอายุ
  }

  // Method พื้นฐานที่ทั้งครูและนักเรียนทำได้
  introduce() {
    console.log(`สวัสดี ฉันชื่อ ${this.name} อายุ ${this.age} ปี`);
  }
}
module.exports = Person;
