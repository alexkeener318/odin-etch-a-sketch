let container = document.querySelector(".container");
// creates the 16x16 divs
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const temp = document.createElement('div');
        temp.classList.add("grid");
        //temp.textContent = "TEST ";
        container.appendChild(temp);
    }
}

// sets up starting webpage
let width = 800 / 16;
let grid = document.querySelectorAll(".grid");
const resize = document.querySelector(".size");
const reset = document.querySelector(".clear");
changeWidth(width);
grid.forEach(square => {
    square.addEventListener('mouseenter', changeColor);
});


function changeColor(e) {
    const div = e.target;
    div.style.backgroundColor = "black";
}

function changeWidth(newWidth){
    grid.forEach(square => {
        square.style.width = newWidth + "px";
    })
}

function clear(e) {
    grid.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

// Resets canvas
reset.addEventListener("click", clear);

resize.addEventListener("click",()=>{
   let newDimension = prompt("Enter new dimensions: ");
   if(newDimension > 100){
       alert("Please enter a value of 100 or less");
       return;
   }
   console.log(newDimension);
   width = 800 / newDimension;
   container.innerHTML = "";

   // recreates grid
   for(let i = 0; i < newDimension; i++){
        for(let j = 0; j < newDimension; j++){
            const temp = document.createElement('div');
            temp.classList.add("grid");
            //temp.textContent = "TEST ";
            container.appendChild(temp);
        }
    }
    grid = document.querySelectorAll(".grid");
    // updates width
    width = 800 / newDimension;
    changeWidth(width);

    //reallows changing color
    grid.forEach(square => {
        square.addEventListener('mouseenter', changeColor);
    });
});