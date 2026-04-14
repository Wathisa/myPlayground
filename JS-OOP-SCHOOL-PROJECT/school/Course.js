class Course {
  constructor(courseId, courseName, credits) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.credits = credits;
  }

  showCourseInfo() {
    console.log(
      `📖 วิชา: ${this.courseName} (รหัส ${this.courseId}, ${this.credits} หน่วยกิต)`,
    );
  }
}
module.exports = Course;
