function calculateBMI() {
  const weightValue = document.getElementById("weight").value;
  const heightValue = document.getElementById("height").value;
  const resultBox = document.getElementById("result");

  const weight = Number(weightValue);
  const heightCm = Number(heightValue);

  if (!weight || !heightCm) {
    resultBox.innerHTML = "ใส่ส่วนสูงและน้ำหนักให้ถูกต้อง";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let bmiText = "";

  if (bmi < 18.5) {
    bmiText = "ผอมเกินไป";
  } else if (bmi < 25) {
    bmiText = "น้ำหนักปกติ";
  } else if (bmi < 30) {
    bmiText = "น้ำหนักเกิน";
  } else {
    bmiText = "อ้วนมาก";
  }

  resultBox.innerHTML = `ค่าดัชนีมวลกายของคุณคือ ${bmi.toFixed(2)} (${bmiText})`;
}
