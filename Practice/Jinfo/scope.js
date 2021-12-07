function make() {
    let count = 0

    return function () {
        return function () {
            return count++
        }
    }
}

let counter = make()

console.log(counter());

let test = counter()

console.log(test());
console.log(test());
console.log(test());

// console.log(counter());

console.log(make());


function random() {
    let num = Math.random()

    return function () {
        return num++
    }
}

let g = random()

let arr = [g(), g(), g()]

console.log(arr);

let testing = `k`

function a() {
    let testing = `j`

    function b() {
        console.log(testing);
    }
    return b
}

let c = a()

c()

function weird(a) {
    let tot = 0
    return function (b) {
        tot = a + (b*2)
        return tot
    }
}

console.log(weird(1)(5));


function inBetween(a,b) {
    return function (x) {
        return x >= a && x <= b;
    }
}

function inArray(y) {
    return function (x) {
        return y.includes(x)
    }
}

let arre = [1,2,3,4,5,6,7]
console.log(arre.filter((inBetween(2,6))));
console.log(arre.filter((inArray([1,2,10]))));

function byField(q) {
    return (a,b) => a[q] > b[q] ? 1 : -1
}

let users = [
    {name : `John`, age : 20, surname : `Wick`},
    {name : `Jason`, age : 20, surname : `Bourne`},
    {name : `Denzel`, age : 20, surname : `Washington`},
]

console.log(users.sort(byField(`name`)));