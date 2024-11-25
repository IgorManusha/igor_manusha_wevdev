async function x() {
  const response = await fetch("https://hp-api.onrender.com/characters");
  const data = await response.json();
  console.log(data);
}
x();
