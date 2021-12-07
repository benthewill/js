let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

  // conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

let secondUser = {
    name: "Damian",
    money: 3333,
    [Symbol.toPrimitive](hint) {
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

console.log(user + secondUser);

let num = 1234;

console.log(num.toString(16));

let testNum = 0.1 + 0.7;

console.log(typeof(+(testNum.toFixed(1))));

console.log(typeof(0));

