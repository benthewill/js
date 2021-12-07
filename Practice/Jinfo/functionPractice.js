function checkAge(age) {
    return (age > 18) ? true : confirm('Parents ok?');
}

function min(a,b) {
    console.log( a < b ? a : b);
}

console.log(min(2,4));

function pow (x, n) {
    let y = x
    for (let i = 1; i < n; i++) {
        y *= x;
    }
    return y;
}

console.log(pow(3,2));