class Empoloyee {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} กำลังทำงาน...`);
  }
}

class Developer extends Empoloyee {
  work() {
    console.log(`${this.name} กำลังเขียนโค้ด...`);
  }
}
class Designer extends Empoloyee {
  work() {
    console.log(`${this.name} กำลังออกแบบ...`);
  }
}

const dev = new Developer("Monton");
const designer = new Designer("Toon");
dev.work();
designer.work();
