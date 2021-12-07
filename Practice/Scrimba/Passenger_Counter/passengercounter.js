let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saved-list");

let count = 0;

function increment (){
    count = count + 1;
    countEl.innerText = count;
}

function save(){
    saveEl.textContent += count;
}

function setZero(){
    count = 0;
    countEl.innerText = count;
}

