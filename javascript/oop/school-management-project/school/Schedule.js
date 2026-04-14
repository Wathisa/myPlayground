class Schedule {
  // นำ Object ทุกอย่างมารวมกันเพื่อสร้างตาราง 1 ช่อง
  constructor(course, teacher, classroom, day, time) {
    this.course = course;
    this.teacher = teacher;
    this.classroom = classroom;
    this.day = day;
    this.time = time;
  }

  showSchedule() {
    console.log(
      `📅 ตารางเรียน: วิชา ${this.course.courseName} | สอนโดย: ${this.teacher.name}`,
    );
    console.log(
      `   วัน-เวลา: ${this.day} [${this.time}] | ห้อง: ${this.classroom.roomNumber} | อาคาร: ${this.classroom.building}`,
    );
  }
}
module.exports = Schedule;
