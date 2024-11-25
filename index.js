

async function x() {
    const response = await fetch(“https://hp-api.onrender.com/api/characters”)
const data = await response.json()
console.log(data)
}
x();