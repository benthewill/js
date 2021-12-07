const calcField = document.getElementById("calculation-field");
// let calcFieldNode = document.getElementById("calculation-field-par").createTextNode("Test");
const number = document.getElementById("number-field");
const output = document.getElementById("output");

let arr = [];
let lastval;

const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");


function add () {

    arr.push(number.value);

    if (arr.length == 1){
        output.textContent = number.value;
        lastval = number.value;
    }

    else {
        lastval = Number(number.value) + Number(arr[arr.length - 2]);
    }

    const addThis = document.createElement("span");
    addThis.textContent = number.value + " + ";
    calcField.appendChild(addThis);


    number.value = " ";
}

function sub () {

}

function mul () {

}

function div () {

}


        
                
                
    addButton.addEventListener('click', add);
    subButton.addEventListener('click', sub);
    mulButton.addEventListener('click', mul);
    divButton.addEventListener('click', div);