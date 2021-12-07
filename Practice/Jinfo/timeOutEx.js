function printNumbers (from, to) {
    let current = from

    let timer = setInterval (function() {
        console.log(current);
        if (current == to) {
            clearInterval(timer)
        }
        current++
    }, 2000)
}

printNumbers(5,10)