
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {

console.log(pos); 
}


let strz = "SisterFriede";

console.log(strz.slice(-5));

function extractCurrency (currency) {
    return +currency.substr(1)
}

console.log(extractCurrency('$50'));