let menu = {
    spagetthi : 1201,
    noodle : 2290,
    chicken : 2999,
    pork : 3010
};


// console.log(menu.value);

console.log(Object.values(menu));

for (let item in menu) {
    console.log(item);
    console.log(menu);
    console.log(menu.values);
    console.log(item);
    console.log(menu[item]);
    // console.log(item['value']);
}

function multiplyValues (obj) {
    for (let item in obj) {
        // console.log(item);
        // console.log(obj);
        // console.log(obj.values);
        // console.log(item['values']);
        ///////////
        console.log(obj[item]);
        ///////////
        obj[item] *= 2;
    }
    return menu;
}

multiplyValues (menu);

console.log(menu);

multiplyValues(menu);

console.log(menu);

let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

  // let's copy all user properties into it
for (let key in user) {
    
    console.log(user[key]);
    console.log(key);

    console.log(user);
    
    clone[key] = user[key];
}

console.log(clone);
// now clone is a fully independent object with the same content

clone.name = "Pete"; // changed the data in it


console.log(user);
console.log(clone);

let cloneTwo = {}

Object.assign(cloneTwo, user);

console.log(cloneTwo);

let assignTest = {
    name : "ben",
    age : 22
}

let assigned = assignTest;

console.log(assignTest);

assignTest.name = "feli";

console.log(assigned);

assigned = null;

console.log(assignTest);
console.log(assigned);

let calculator = {
    read(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read(2,10);

console.log(calculator.sum());
console.log(calculator.mul());

alert( calculator.sum() );
alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//     this.step++;
//     },
//     down() {
//     this.step--;
//     },
//     showStep: function() { // shows the current step
//     console.log(this.step);
//     }
// };

let ladder = {
    step: 0,
    up() {
    this.step++;
    return this;
    },
    down() {
    this.step--;
    return this;
    },
    showStep() {
        return this.step;
    }
};

ladder.up().up().down().up().down().showStep();

console.log(ladder.showStep()); 