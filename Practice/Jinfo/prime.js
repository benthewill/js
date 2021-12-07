function testPrime (n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) continue;
            else arr.push(i)
        }
    }
    
    console.log(arr);
}

testPrime (9);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i); // a prime
}

