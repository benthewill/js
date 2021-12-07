const buyButton = document.getElementById("buy-button");
const nameField = document.getElementById("name-field");

const summaryOutput = document.getElementById("summary-field");
const summaryTitle = document.getElementById("summary-field-title");


// const singleAmount = document.getElementById("single-amount");
// const doubleAmount = document.getElementById("double-amount");
// const tripleAmount = document.getElementById("triple-amount");

// const redColor = document.getElementById("red-color");
// const yellowColor = document.getElementById("yellow-color");

// console.log(amountChosen);
const colorChosen = document.querySelectorAll('[name=color]');
const amountChosen = document.querySelectorAll('[name=amount]');

function orderSummary () {
    
    let selectedColor;
    let selectedAmount;

    for (const amt of amountChosen) {
        if (amt.checked == true) {
            selectedAmount = amt.value;
        }
    }
    for (const clr of colorChosen) {
        if (clr.checked == true) {
            selectedColor = clr.value;
        }
    }
    
    summaryOutput.textContent = nameField + selectedAmount + " " + selectedColor;
    summaryTitle.textContent = "Below is your Order Summary:" 
}

buyButton.addEventListener('click', orderSummary);