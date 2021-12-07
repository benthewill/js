let john = { name: "John", age: 10 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 20 };

let arr = [ john, pete, mary ];

function average(arr) {
    let avg = []
    arr.forEach(a => {
        let x = a.age
        console.log(x);
        avg.push(x)
    })
    console.log(avg);
    let sum = avg.reduce((a,b) => {
        return a + b;
    })
    return sum / arr.length
}

console.log(average(arr));