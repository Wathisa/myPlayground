# OOP in JavaScript — ตัวอย่างพื้นฐาน

โปรเจกต์นี้เป็นตัวอย่างการเขียน **Object-Oriented Programming (OOP)** ด้วย JavaScript
เพื่อฝึกแนวคิดเรื่อง **Inheritance (การสืบทอด)** และ **Polymorphism (การมีหลายรูปแบบ)**

## โครงสร้างไฟล์

- [inheritance01.js](inheritance.js)
- [inheritance02.js](inheritance2.js)
- [polymorphism.js](polymorphism.js)

---

## 1. [inheritance.js](inheritance.js) — การสืบทอดแบบพื้นฐาน

ไฟล์นี้แสดงแนวคิดของ **Inheritance** คือคลาสลูกสามารถใช้ method ของคลาสแม่ได้โดยไม่ต้องเขียนซ้ำ

- คลาส `Employee` เป็น **คลาสแม่** มี property `name`, `salary` และ method `work()`
- คลาส `Developer` สืบทอดจาก `Employee` ด้วยคำสั่ง `extends` และเพิ่ม method ของตัวเองคือ `code()`
- ตอนสร้าง `new Developer("Monton", 20000)` จะใช้ constructor ของ `Employee` โดยอัตโนมัติ (เพราะ `Developer` ไม่ได้เขียน constructor ของตัวเองไว้)

**สิ่งที่ได้เรียนรู้:** คลาสลูกเข้าถึง method ของคลาสแม่ได้ (`dev.work()`) และยังมี method เฉพาะของตัวเองได้ (`dev.code()`)

---

## 2. [inheritance2.js](inheritance2.js) — การสืบทอดพร้อมเรียก `super()`

ไฟล์นี้ต่อยอดจากไฟล์แรก โดยแสดงวิธีเขียน **constructor ในคลาสลูก** และเรียก constructor ของคลาสแม่ผ่าน `super()`

- คลาส `Developer` เขียน constructor ของตัวเอง แล้วเรียก `super(name, salary)` เพื่อส่งค่าต่อไปให้ `Employee` จัดการ
- method `code()` ของ `Developer` ใช้ทั้ง `this.name` และ `this.salary` ที่ได้รับมาจากคลาสแม่

**สิ่งที่ได้เรียนรู้:** ถ้าคลาสลูกเขียน constructor เอง **จำเป็นต้องเรียก `super()`** ก่อนใช้ `this` เสมอ

> หมายเหตุ: ในข้อความมีคำว่า "เงืนเดือน" ซึ่งสะกดผิด ควรแก้เป็น "เงินเดือน"

---

## 3. [polymorphism.js](polymorphism.js) — Polymorphism ผ่านการ override method

ไฟล์นี้แสดงแนวคิด **Polymorphism** คือคลาสลูกหลายคลาสสามารถมี method ชื่อเดียวกันกับคลาสแม่ แต่ทำงานแตกต่างกันได้

- คลาส `Empoloyee` (คลาสแม่) มี method `work()` ที่แสดงว่า "กำลังทำงาน..."
- คลาส `Developer` **override** method `work()` ให้แสดงว่า "กำลังเขียนโค้ด..."
- คลาส `Designer` ก็ **override** method `work()` ให้แสดงว่า "กำลังออกแบบ..."
- เมื่อเรียก `.work()` จากวัตถุแต่ละชนิด จะได้ผลลัพธ์ต่างกันตามคลาสของตัวเอง

**สิ่งที่ได้เรียนรู้:** method ชื่อเดียวกันสามารถมีพฤติกรรมต่างกันได้ตามคลาสที่สร้างวัตถุขึ้นมา — นี่คือหัวใจของ Polymorphism

> หมายเหตุ: ชื่อคลาส `Empoloyee` สะกดผิด (เกินตัว `o`) ควรแก้เป็น `Employee`

---

## วิธีรันโค้ด

รันแต่ละไฟล์ด้วยคำสั่ง Node.js:

```bash
node inheritance.js
node inheritance2.js
node polymorphism.js
```

## สรุปแนวคิด OOP ที่ใช้ในโปรเจกต์นี้

| แนวคิด       | ไฟล์ตัวอย่าง      | สรุปสั้น ๆ                              |
| ------------ | ----------------- | --------------------------------------- |
| Inheritance  | `inheritance.js`  | คลาสลูกใช้ method จากคลาสแม่ได้         |
| `super()`    | `inheritance2.js` | คลาสลูกเรียก constructor ของคลาสแม่     |
| Polymorphism | `polymorphism.js` | method ชื่อเดียวกัน ทำงานต่างกันตามคลาส |
