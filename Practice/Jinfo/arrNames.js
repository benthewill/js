let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

console.log(users);

let names = users.map(a => a.name)

console.log(names);

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map((a,b) => ({
    fullName : `${a.name} ${a.surname}`,
    id : a.id
}) )

console.log(usersMapped);

/*
usersMapped = [
{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },
{ fullName: "Mary Key", id: 3 }
]
*/

let dbz = [`goku`, `vegeta`, `gohan`, `broly`, `trunks`, `goten`]
let dbzPair = []

for (let char of dbz.entries()){
    console.log(char);
    dbzPair.push(char)
}

console.log(dbzPair);
console.log(dbzPair[0]);

dbzPair.forEach((a,b) => {
    console.log(a[1]);
})


for (let char of dbz){
    console.log(char);
}
