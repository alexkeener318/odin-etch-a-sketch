let container = document.querySelector(".container");
// creates the 16x16 divs
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const temp = document.createElement('div');
        temp.classList.add("grid");
        temp.textContent = "TEST ";
        container.appendChild(temp);
    }
}

function changeColor(e) {
    console.log(e.target);
    const div = e.target;
    div.style.backgroundColor = "black";
}

let width = 800 / 16;
let grid = document.querySelectorAll(".grid");
console.log(grid);
grid.forEach(square => {
    square.addEventListener('mouseenter', changeColor);
});