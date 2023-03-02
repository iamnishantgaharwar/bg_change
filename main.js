const getRandomColor = (()=>{
    const letter = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]; // Math floor function is to round the value to integer and Math random will generate random value.
    }
    return color;
})

const changeColor = document.getElementById("changeColor");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    changeColor.style.backgroundColor = getRandomColor(); // take random color
});



