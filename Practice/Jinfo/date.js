let date = new Date()

console.log(date.getHours());

let anniv = new Date(2020, 11, 24, 21, 30, 15, 0)

console.log(anniv);

let start = new Date();

let test = 0;

for (let i = 0; i < 99999999; i++) {
    test += (i*3)
}

console.log(test);

let end = new Date();

console.log(end - start);

let thisTime = Date.now()

console.log(thisTime);

