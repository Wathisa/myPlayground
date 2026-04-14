//จะเห็นว่าเรามี Class เป็นแม่พิมพ์แค่ชุดเดียว แต่เราสามารถสร้าง Object ครูได้หลายคน (คุณครูอ๋อง, คุณครูทราย)
//และสร้าง Object นักเรียนได้หลายคน นี่คือข้อดีของ OOP ที่ทำให้เราไม่ต้องเขียนโค้ดซ้ำซ้อนเพื่อสร้างตัวละครใหม่
//และเมื่อเอา Object มาประกอบกันในคลาส Schedule หรือ Grade ระบบก็สามารถเชื่อมโยงข้อมูลกันได้อย่างสมบูรณ์

// 1. นำเข้า Class ทั้งหมด
const Student = require("./school/Student");
const Teacher = require("./school/Teacher");
const Course = require("./school/Course");
const Classroom = require("./school/Classroom");
const Enrollment = require("./school/Enrollment");
const Grade = require("./school/Grade");
const Schedule = require("./school/Schedule");

console.log("\n=== 🏫 เริ่มต้นระบบ School Management System ===\n");

// 2. สร้างข้อมูล(Objects)
console.log(">> กำลังสร้างข้อมูลบุคลากรและสถานที่...\n");

// สร้างครู 2 คน
const teacher1 = new Teacher("T001", "คุณครูอ๋อง", 38, "เขียนโปรแกรม");
const teacher2 = new Teacher("T002", "คุณครูทราย", 20, "การออกแบบเว็บไซต์");

// สร้างนักเรียน 5 คน
const student1 = new Student("S001", "เด็กหญิงเอม", 12, "Grade 6");
const student2 = new Student("S002", "เด็กหญิงหลิน", 12, "Grade 6");
const student3 = new Student("S003", "เด็กชายตูน", 10, "Grade 4");
const student4 = new Student("S004", "เด็กชายเจ", 9, "Grade 3");
const student5 = new Student("S005", "เด็กชายการ์ด", 9, "Grade 3");

// สร้างวิชา 2 วิชา
const course1 = new Course("C101", "JavaScript เบื้องต้น", 3);
const course2 = new Course("D101", "UI/UX Design", 3);

// สร้างห้องเรียน 2 ห้อง
const room1 = new Classroom("401", "คอมพิวเตอร์");
const room2 = new Classroom("102", "ศิลปะและการออกแบบ");

// แนะนำตัวละคร
teacher1.showProfile();
teacher2.showProfile();
student1.showProfile();
student2.showProfile();
student3.showProfile();
student4.showProfile();
student5.showProfile();

console.log("\n--- 📝 เริ่มการลงทะเบียน ---");

// 3. จำลองเหตุการณ์: การลงทะเบียนเรียน
// เด็กหญิงเอม เด็กหญิงหลิน และเด็กชายตูน ลงเรียนเขียนโปรแกรม
const enroll1 = new Enrollment(student1, course1);
const enroll2 = new Enrollment(student2, course1);
const enroll3 = new Enrollment(student3, course1);

// เด็กชายเจ และ เด็กชายการ์ด ลงเรียนวิชาออกแบบ
const enroll4 = new Enrollment(student4, course2);
const enroll5 = new Enrollment(student5, course2);

// แสดงผลการลงทะเบียน
enroll1.showEnrollment();
enroll2.showEnrollment();
enroll3.showEnrollment();
enroll4.showEnrollment();
enroll5.showEnrollment();

console.log("\n--- 📅 จัดตารางเรียน ---");

// 4. จำลองเหตุการณ์: จัดตารางเรียน
// ตารางวิชาเขียนโปรแกรมของครูอ๋อง
const schedule1 = new Schedule(
  course1,
  teacher1,
  room1,
  "วันจันทร์",
  "09:00 - 12:00",
);
schedule1.showSchedule();

// ตารางวิชาออกแบบของครูทราย
const schedule2 = new Schedule(
  course2,
  teacher2,
  room2,
  "วันพุธ",
  "13:00 - 16:00",
);
schedule2.showSchedule();

console.log("\n--- 📊 สิ้นเทอม: ประกาศผลคะแนน ---");

// 5. จำลองเหตุการณ์: ตัดเกรด
const grade1 = new Grade(student1, course1, 85);
const grade2 = new Grade(student2, course1, 78);
const grade3 = new Grade(student3, course1, 90);
const grade4 = new Grade(student4, course2, 65);
const grade5 = new Grade(student5, course2, 49);

grade1.showGrade();
grade2.showGrade();
grade3.showGrade();
grade4.showGrade();
grade5.showGrade();

console.log("\n=== ✅ จบการทำงาน School Management System ===\n");
