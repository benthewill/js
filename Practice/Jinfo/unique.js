function unique(arr) {
    let newArr = []
    for (let i = 0; i = (Math.floor(Math.random() * arr.length)); i++) {
        newArr.push(arr[(Math.floor(Math.random() * arr.length))])
    }
    return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

console.log((Math.ceil(Math.random() * strings.length)));

console.log(unique(strings));