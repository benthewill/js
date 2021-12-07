let user = {
    name: "John",
    years: 30
};

let {name, years : age, isAdmin = false} = user

console.log(age);
console.log(name);
console.log(isAdmin);

///////////////////////////////////////////////////////////////////////////

let salary = {
    "ben" : 300000,
    "feli" : 275000,
    "kenzo" : 1100000,
    "danielle" : 1100000,
    "louise" : 222000,
    "theo" : 312000
}

function topSal (obj) {
    let max = []
    let maxName = []

    for (const [name, salary] of Object.entries(obj)) {
        if (salary > max) {
            max.push(salary)
            maxName.push(name)
        }
    }
    console.log(max);
    console.log(maxName);
    

}

topSal(salary)