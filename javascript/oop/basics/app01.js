//Object
const user = {
  name: "John",
  age: 30,
  say: function () {
    console.log("Hello, my name is ");
  },
};

//Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("Hello, my name is " + this.name);
  }
}
