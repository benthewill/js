let goku = {
    kamehameha(strength, type) {
        console.log(`Exuded ${type} at ${strength} power level`);
        switch(type) {
            case `big bang` :
                return strength * 2
                break;
            case `final` :
                return strength * 7
                break;
            case `times ten` :
                return strength * 10
                break;
            case `kaioken` :
                return strength * 30
                break;
            case `spirit bomb` :
                return strength * 50
                break;
            default :
                return strength
        }
    }
}

function cachingDecorator(attack, x) {
    let done = new Map()

    console.log(attack);

    return function() {
        let key = x(arguments)

        console.log(key);
        if(done.has(key)) {
            return done.get(key)
        }

        let damage = attack.apply(this, arguments)

        done.set(key, damage)

        return damage
    }
}

function hash(atts) {
    return atts[0] + `,` + atts[1]
}

goku.kamehameha = cachingDecorator(goku.kamehameha, hash)

console.log(goku.kamehameha(5, `final`));

let arrT = [`goku`, `vegeta`, `gohan`]

let all = arrT.join(`, haha, `)

console.log(all);
console.log(arrT);

function joyner () {
    return [].join.call(arguments)
}

console.log(joyner(`goku`, `vegeta`, `kamehameha`));