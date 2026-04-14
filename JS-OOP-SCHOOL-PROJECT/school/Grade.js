class Grade {
  constructor(student, course, score) {
    this.student = student;
    this.course = course;
    this.score = score;
    this.grade = this.calculateGrade(score); //เรียกใช้ฟังก์ชันคำนวณเกรด
  }

  calculateGrade(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  }

  showGrade() {
    console.log(
      `📊 ผลการเรียน: ${this.student.name} | วิชา ${this.course.courseName} | คะแนน: ${this.score} | เกรด: ${this.grade}`,
    );
  }
}
module.exports = Grade;
