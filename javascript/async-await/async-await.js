//then ทำงานแบบ A > B > C
//catch ทำงานเมื่อมี error เกิดขึ้นใน then

//แบบ await ทำ A รอให้เสร็จแล้วค่อยทำ B ต่อ รอให้เสร็จแล้วค่อยทำ C ต่อ

//promise (.then)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

//async await
const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await res.json();
console.log(data);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      resolve(data);
    }, 2000);
  });
}

async function run() {
  const result = await fetchData();
  console.log(result);
}

run();

async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUser();

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
