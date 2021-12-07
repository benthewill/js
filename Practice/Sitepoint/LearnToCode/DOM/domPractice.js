const bleachButton = document.getElementById("bleach");
const testHead = document.getElementById("Main-Head");
const dbzItems = document.getElementsByClassName("dbz");
const addingMove = document.getElementById("addMove");

bleachButton.addEventListener('click', changeToBleach);


function changeToBleach () {
     dbzItems.removeChild();
}