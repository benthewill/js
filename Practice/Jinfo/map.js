// function unique(arr) {
//     let set = new Set(arr)
//     console.log(set);
//     return Array.from(set)

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ]

// console.log(unique(values));

///////////////////////////////////////////////////////////////////////////

function aclean(array) {
    let sorted = new Map()
    for (item of array) {
        let sorting = item.toLowerCase().split(``).sort().join(``)
        console.log(sorting);
        console.log(item);
        let final = sorted.set(sorting,item)
    }
    console.log(sorted);
    return Array.from(sorted.values())
}

let ana = [`nap`, `teachers`, `cheaters`, `pan`, `ear`, `era`, `hectares`];

aclean(ana)

///////////////////////////////////////////////////////////////////////////

let map = new Map();

map.set("name", "John");

console.log(map);

let keys = Array.from(map.keys())

console.log(keys);

// Error: keys.push is not a function
keys.push("more")

console.log(keys);

console.log(map);