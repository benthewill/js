function FizzBuzzLoop (start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        }
        else if (i % 5 == 0) {
            arr.push("Buzz");
        } 
        else if (i % 3 == 0) {
            arr.push("Fizz");
        }
        else {
            arr.push(i);
    }
}
    return arr;

}

console.log(FizzBuzzLoop(2, 40));