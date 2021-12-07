function test (a) {
    let count = 0

    // let b = a

    return function (b) {
        return count += (b * a)
    }
}

let counter = test(3)

console.log(counter(2));
console.log(counter(6));
console.log(counter(8));

function blim (a) {
    let clim = a*2 
    return Math.random() * clim
}

console.log(blim(2424));

let timing = setTimeout(blim, 1000, 3)

console.log(timing);

clearTimeout(timing)
console.log(timing);

let timerId = setInterval(blim, 2000)

setTimeout(() => {clearInterval(timerId);
    console.log(`stop`);}, 5000)