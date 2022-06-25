// let saiyan = {
//     // transform() {
//     //     // console.log('test')
//     //     return saiyan.base * 50
//     // },
//     race : "Saiyan",
//     powerUp1 : 'Super',

//     set firstTransformation(value) {
//         [this.powerUp1, this.race] = value.split(' ');
//     },

//     get firstTransformation() {
//         return `${this.powerUp1} ${this.race}`
//     },


//     get transform() {
//         if (this.base > 37000) {
//             return `${this.name} is a Super Saiyan`
//         }
//         else {
//             return `${this.name} is not powerful enough`
//         }
//     },

//     royal() {
//         this.isRoyal = true
//     },

//     get bloodline() {
//         if (this.isRoyal) {
//             return `Saiyan is of Royal Bloodline`
//         }
//     },

//     zenkaiboost : true
// }


// let goku = {
//     name : 'Son Goku',
//     race : "Saiyan",
//     powerUp1 : 'Kaioken',
//     base : 40000,
//     multiplier : 3,
    
//     kamehameha : true,
//     bigBang : false,
//     __proto__: saiyan,
// }

// let vegeta = {
//     name : 'Vegeta',
//     base : 36500,
//     multiplier : 3,
//     kamehameha : false,
//     bigBang : true,
//     __proto__: saiyan,
// }


// console.log(saiyan.firstTransformation);
// console.log(goku.firstTransformation);
// console.log(vegeta.firstTransformation);

// console.log(vegeta.isRoyal);
// vegeta.royal();
// console.log(vegeta.isRoyal);
// console.log(vegeta.bloodline);

// console.log(vegeta.transform);
// console.log(goku.transform);

let saiyan = {
    get superSaiyan() {
        return `${this.name} is a Super Saiyan with power of ${this.base * 50}`
    }
}

let goku = {
    name : `Son Goku`,
    base : 57400,
    __proto__ : saiyan
}

console.log(goku.superSaiyan);