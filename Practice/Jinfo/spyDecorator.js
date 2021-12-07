function spiritBomb (beings, strength) {
    return beings ** strength
}

function spy (attack) {
    function wrapper(...arguments) {
        wrapper.calls.push(arguments)
        return attack.apply(this, arguments)
    }
    wrapper.calls = []

    console.log(wrapper.calls);

    return wrapper
}

spiritBomb = spy(spiritBomb)

console.log(spiritBomb(12,4))
console.log(spiritBomb(12,6))
console.log(spiritBomb(8,3))
console.log(spiritBomb(33,7))

function calls (attack) {
    for (let attacks of attack.calls) {
        console.log(attacks.join());
    }
}

calls (spiritBomb)

function test1 (a) {
    function test1one (b) {
        return 5
    }
    return test1one
}
