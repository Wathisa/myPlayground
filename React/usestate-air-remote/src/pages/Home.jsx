// import useState จาก React เพื่อใช้เก็บและเปลี่ยนค่าของ state ใน component
import { useState } from "react";

// สร้าง component ชื่อ Home
const Home = () => {
  // state สำหรับเก็บว่าแอร์เปิดอยู่หรือไม่ โดยค่าเริ่มต้นเป็น false คือปิดอยู่
  const [powerOn, setPowerOn] = useState(false);
  // state สำหรับเก็บอุณหภูมิ โดยเริ่มต้นที่ 25 องศา
  const [temperature, setTemperature] = useState(25);

  // ฟังก์ชันสำหรับเพิ่มอุณหภูมิ
  const increaseTemp = () => {
    // ถ้าแอร์ยังไม่เปิด หรืออุณหภูมิถึง 30 แล้ว จะไม่ทำอะไร
    if (!powerOn || temperature >= 30) return;
    // เพิ่มค่าอุณหภูมิขึ้น 1
    setTemperature(temperature + 1);
  };

  // ฟังก์ชันสำหรับลดอุณหภูมิ
  const decreaseTemp = () => {
    // ถ้าแอร์ยังไม่เปิด หรืออุณหภูมิต่ำสุดที่ 16 แล้ว จะไม่ทำอะไร
    if (!powerOn || temperature <= 16) return;
    // ลดค่าอุณหภูมิลง 1
    setTemperature(temperature - 1);
  };

  // return ส่วน UI ที่จะแสดงผลบนหน้าจอ
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800">
      {/* กล่องครอบเนื้อหาทั้งหน้าและกำหนดความกว้างสูงสุด */}
      <div className="mx-auto max-w-4xl">
        {/* ส่วนหัวของหน้า จัดข้อความไว้กึ่งกลาง */}
        <div className="mb-6 text-center">
          {/* หัวข้อหลักของหน้า */}
          <h1 className="text-3xl font-bold">Air Conditioner Remote</h1>
          {/* ข้อความอธิบายสั้น ๆ ใต้หัวข้อ */}
          <p className="mt-2 text-slate-600">ตัวอย่างรีโมทแอร์แบบพื้นฐานด้วย React และ useState</p>
        </div>

        {/* กล่องกำหนดความกว้างของการ์ดรีโมท */}
        <div className="mx-auto max-w-xl">
          {/* การ์ดหลักของรีโมทแอร์ */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            {/* แถวบนสุด แสดงสถานะเครื่องและปุ่มเปิด/ปิด */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              {/* กล่องข้อความฝั่งซ้าย */}
              <div>
                {/* ข้อความบอกหัวข้อสถานะ */}
                <p className="text-sm text-slate-500">สถานะเครื่อง</p>
                {/* แสดงคำว่า เปิดอยู่ หรือ ปิดอยู่ ตามค่า powerOn */}
                <h2 className="text-2xl font-semibold">{powerOn ? "เปิดอยู่" : "ปิดอยู่"}</h2>
              </div>

              {/* ปุ่มสำหรับสลับสถานะเปิด/ปิดแอร์ */}
              <button
                type="button"
                onClick={() => setPowerOn(!powerOn)}
                className={`rounded-xl px-4 py-2 font-medium text-white ${
                  powerOn ? "bg-red-500 hover:bg-red-600" : "bg-emerald-500 hover:bg-emerald-600"
                }`}
              >
                {powerOn ? "ปิดแอร์" : "เปิดแอร์"}
              </button>
            </div>

            {/* กล่องแสดงอุณหภูมิที่ตั้งไว้ */}
            <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-center text-white">
              {/* ข้อความบอกว่าค่านี้คืออุณหภูมิที่ตั้งไว้ */}
              <p className="text-sm text-slate-300">อุณหภูมิที่ตั้งไว้</p>
              {/* ถ้าแอร์เปิดอยู่ให้แสดงอุณหภูมิ ถ้าปิดอยู่ให้แสดง -- */}
              <p className="mt-3 text-6xl font-bold">{powerOn ? `${temperature}°C` : "--"}</p>
            </div>

            {/* กลุ่มปุ่มเพิ่มและลดอุณหภูมิ */}
            <div className="mt-6 flex items-center justify-center gap-4">
              {/* ปุ่มลดอุณหภูมิ */}
              <button
                type="button"
                onClick={decreaseTemp}
                className="rounded-xl bg-slate-200 px-5 py-3 text-xl font-bold hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!powerOn}
              >
                -
              </button>

              {/* ปุ่มเพิ่มอุณหภูมิ */}
              <button
                type="button"
                onClick={increaseTemp}
                className="rounded-xl bg-sky-500 px-5 py-3 text-xl font-bold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!powerOn}
              >
                +
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

// export component Home ออกไปเพื่อให้ไฟล์อื่น import ไปใช้งานได้
export default Home;
