var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var item in person) {
    console.log(item + ':' + person[item]);
}

var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;

console.log(circle);

