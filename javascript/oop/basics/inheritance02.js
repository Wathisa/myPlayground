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
  constructor(name, salary) {
    super(name, salary); // เรียก constructor ของ Employee
  }

  code() {
    console.log(`${this.name} + เงืนเดือน ${this.salary} `);
  }
}

const dev = new Developer("Monton", 20000);
dev.work(); // Inherited method
dev.code(); // Developer's own method
