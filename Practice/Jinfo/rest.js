let numList = [1,3,4,14]
let objTest = {
    a : 2,
    b : 3
}

console.log(...numList);

function sumArr(arr) {
    console.log(...arr);

    let arr2 = [...arr]
}

console.log(sumArr(numList));

function sumTest(...args) {
    let sum = 0
    
    function isObject(val) {
        if (val === null) {
            return false
        }
        return ((typeof val === `function`) || (typeof val === `object`))
    }

    if (isObject(args[0])) {
        for (let [name, num] of Object.entries(args[0])) {
            sum += num
        }
        return sum
    }

    else 
        return args.flat().reduce((a,b) => a + b)
}

console.log(sumTest(numList));
console.log(sumTest(1,3,4,14));
console.log(sumTest(objTest));
console.log(sumTest(null));
