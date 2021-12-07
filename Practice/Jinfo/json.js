let user  = {
    name : `feli`,
    age : 21,
    address : `home`,
    birthdate : new Date (2000, 10, 24),
}

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
user.birthday = days[user.birthdate.getDay()]

console.log(user.birthday);

let stringified = JSON.stringify(user)

console.log(stringified);

let feli = JSON.parse(stringified, function(key,value) {
    if (key == 'birthdate') {
        return new Date(value)
    }
    return value
})

console.log(feli);

let {name, age, address, birthdate, birthday} = feli

console.log(name);
console.log(age);
console.log(address);
console.log(birthdate);
console.log(birthday);