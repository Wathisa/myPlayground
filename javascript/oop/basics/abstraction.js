class CoffeeMachine {
  makeCoffee() {
    this.boilWater();
    this.brewCoffee();
    this.pourIntoCup();
    console.log("= กาแฟพร้อมเสิร์ฟ!");
  }
  boilWater() {
    console.log("กำลังต้มน้ำ...");
  }
  brewCoffee() {
    console.log("กำลังชงกาแฟ...");
  }
  pourIntoCup() {
    console.log("เทกาแฟลงในแก้ว...");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
