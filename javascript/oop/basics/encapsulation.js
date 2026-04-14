class BankAccount {
  #balance = 0; // Private field

  constructor(owner) {
    this.owner = owner; // Public field
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("จำนวนเงินต้องมากกว่า 0");
      return;
    }
    this.#balance += amount;
    console.log(`ฝากเงินสำเร็จ: ${amount} บาท`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("จำนวนเงินต้องมากกว่า 0");
      return;
    }
    if (amount > this.#balance) {
      console.log("ยอดเงินไม่เพียงพอ");
      return;
    }
    this.#balance -= amount;
    console.log(`ถอนเงินสำเร็จ: ${amount} บาท`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Monton");
account.deposit(1000);
account.withdraw(500);
console.log(`ยอดเงินคงเหลือ: ${account.getBalance()} บาท`);
