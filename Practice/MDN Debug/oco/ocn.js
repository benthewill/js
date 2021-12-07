oco = Object.create( {} );   // create a normal object
ocn = Object.create( null ); // create a "null" object

console.log(oco) // {} -- Seems normal
console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

console.log(oco) // {p: 1} -- Still seems normal
console.log(ocn) // {p: 0} -- Still seems normal here too. BUT WAIT...

"oco is: " + oco // shows "oco is: [object Object]"
"ocn is: " + ocn // throws error: Cannot convert object to primitive value
