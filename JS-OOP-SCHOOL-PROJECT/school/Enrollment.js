//คลาสนี้จะรับ Object จากคลาสอื่นเข้ามาทำงานร่วมกัน
//เราส่ง Object นักเรียนและวิชาเข้ามาเก็บไว้ด้วยกัน เพื่อระบุว่าใครเรียนอะไร

class Enrollment {
  // รับ Object student และ course เข้ามาเชื่อมกัน
  constructor(student, course) {
    this.student = student;
    this.course = course;
  }

  showEnrollment() {
    // ดึง .name จาก Object student และ .courseName จาก Object course มาใช้
    console.log(
      `✅ การลงทะเบียน: ${this.student.name} ลงเรียนวิชา ${this.course.courseName}`,
    );
  }
}
module.exports = Enrollment;
