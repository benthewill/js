function useCat() {
    let name = 'Ben'

    return [
        () => `My name is ${name}`,
        (newName) => name = newName
    ]
}

const [meow, setName] = useCat()

console.log(meow());

setName('Feli');

console.log(meow());

const price = 88;
const fobNeeded = false;

const parkingLot = {
    price,
    fobNeeded
}

const {price: monthly, fobNeeded: gateClosed } = parkingLot;

console.log(monthly);

(function (x) {
    console.log(x);
})(global);

(function (global) {
    console.log(global);
})(this)

