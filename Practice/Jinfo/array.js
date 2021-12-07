let arrItems = [1,4,12,55];

let arrTest = [];

arrTest.push(...arrItems)

console.log(arrTest);

arrTest.pop()

console.log(arrTest);

arrTest.shift()

console.log(arrTest);

arrTest.unshift(123, ...arrItems)

console.log(arrTest);

function arrIter (arr) {
    for(let i of arr) {
        console.log(i);
    }
}

arrTest.splice(-1,1)
console.log(arrTest);


let styles = [`Jazz`, `Blues`];

console.log(styles);
styles.push('Rock');
console.log(styles);
styles[1] = `Classics`;
console.log(styles);
styles.shift()
console.log(styles);
styles.unshift(`Reggae`,`Rap`)
console.log(styles);


let newArr = [];

function sumInput() {
    while (true) {
        let input = prompt('Insert a number', 0)
    }
}

let arrTestTwo = [1,2,3,4,5,6]
arrTestTwo.splice(-2,2)

console.log(arrTestTwo);

let arrTestThree = arrTestTwo.slice()

console.log(arrTestThree);

arrTestTwo.splice(0,3)
console.log(arrTestTwo);

console.log(arrTestThree);

//Concat Spreadable

let bar = [2,3,4];

let barTwo = {
    0 : "test one",
    1 : "something",
    [Symbol.isConcatSpreadable] : true,
    length : 2
};


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

bar.forEach((a, b ,c) => {
    console.log(`${a} is located at index ${b} in ${c}`);
})

let idLists = [
    {
        id : 0010314442,
        name : `benthewill`,
        email : `benthewill@gmail.com`,
        address : `1990 E Kent Ave South`,
        gender : `male`
    },
    {
        id : 0010315412,
        name : `bengoldhuman`,
        email : `bengoldhuman@gmail.com`,
        address : `3157 E Kent Ave S`,
        gender : `female`
    },
    {
        id : 0010314441,
        name : `manword`,
        email : `manword@gmail.com`,
        address : `Kamehameha Road`,
        gender : `male`
    },
    {
        id : 0010347474,
        name : `phoebe`,
        email : `phoebe@gmail.com`,
        address : `Central Perk`,
        gender : `female`
    },
]

function filtered (arr) {
    let arrFilteredFemale = arr.filter(a => a.gender == `female`);
    arrFilteredFemale.forEach((a) => {
        console.log(`${a.name} lives at ${a.address}`);
    });
}

console.log(filtered (idLists));

