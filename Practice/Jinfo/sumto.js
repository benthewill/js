var sum = 0
var num = 1

function sumToRe (n) {
    if (num == n) {
        return sum += num
    }
    else {
        sum += num;
        num++;
        return sumToRe(n)
    }
}

function sumToLo (n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

function sumToRd (n) {
    
}

console.log(sumToRe (100));
console.log(sumToLo (100));
console.log(sumToRd (100));

// console.log(sumToRe(undefined));
// console.log(sumToLo(undefined));
// console.log(sumToRd(undefined));