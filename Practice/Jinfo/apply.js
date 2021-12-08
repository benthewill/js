let goku = {
    name : `Son Goku`,
    attack : `Kamehameha`,
    form : `Super Saiyan`,
}

function attack (power, intent) {
    return `${this.name} attacked using ${power}-powered ${this.attack} with ${intent} intention`
}

let gokuAttacks = attack.apply(goku, [`high`,`evil`])
console.log(gokuAttacks);

let gokuAttacksCall = attack.call(goku, `high`,`evil`)
console.log(gokuAttacksCall);