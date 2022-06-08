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

function changeColor(e) {
    console.log(e.target);
    const div = e.target;
    div.style.backgroundColor = "black";
}

function changeWidth(newWidth){
    grid.forEach(square => {
        square.style.width = newWidth + "px";
    })
}

let width = 800 / 16;
console.log("WIDTH: " +width);
let grid = document.querySelectorAll(".grid");
changeWidth(width);
grid.forEach(square => {
    square.addEventListener('mouseenter', changeColor);
});

const button = document.querySelector("button");

button.addEventListener("click",()=>{
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