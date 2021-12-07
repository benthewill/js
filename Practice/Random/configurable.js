'use strict';

const person2 = {
    name: 'felicia',
    herAge: 19
}

let person = {};
Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

Object.defineProperty(person2, 'herAge', {value: 20, configurable: false});

delete person2.herAge;

console.log(person2);
