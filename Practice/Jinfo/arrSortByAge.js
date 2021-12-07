let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(arr);

function sortByAge(x) {

    let sorted = x.sort((a,b) => a.age - b.age);
    console.log(sorted);
}

sortByAge(arr);