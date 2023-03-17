const getRandomColor = (()=>{
    const letter = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letter[Math.floor(Math.random() * 15)]; // Math floor function is to round the value to integer and Math random will generate random value.
    }
    return color;
})


const changeColor = document.getElementById("changeColor");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    changeColor.style.backgroundColor = getRandomColor(); // take random color
    console.log(getRandomColor());
});





