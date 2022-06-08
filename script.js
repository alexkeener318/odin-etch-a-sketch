let container = document.querySelector(".container");
// creates the 16x16 divs
let counter = 1;
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const temp = document.createElement('div');
        temp.classList.add("grid");
        temp.textContent = "TEST " + counter;
        counter++;
        container.appendChild(temp);
    }
}