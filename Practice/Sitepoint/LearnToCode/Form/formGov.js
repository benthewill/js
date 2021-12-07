const form = document.forms.formField;
const who = document.getElementById("who");

form.addEventListener('submit', youAre);

function youAre (e) {
    e.preventDefault();

    const gender = document.querySelectorAll('[name=genderchoice]');
    const orientation = document.querySelectorAll('[name=orientationchoice]');

    let selectedGender;

    for (let gnd of gender) {
        if (gnd.checked == true) {
            selectedGender = gnd.value;
        }
    }

    who.textContent = `So your name is ${form.firstnamefield.value} ${form.lastnamefield.value}. You're currently ${form.agefield.value} years old. You're a ${selectedGender}`
}