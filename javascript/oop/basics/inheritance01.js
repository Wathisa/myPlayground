class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} กำลังทำงาน...`);
  }
}

class Developer extends Employee {
  code() {
    console.log(`${this.name} กำลังเขียนโค้ด...`);
  }
}

const dev = new Developer("Monton", 20000);
dev.work(); // Inherited method
dev.code(); // Developer's own method
