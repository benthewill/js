/*The == operator compares objects by identity. 
But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns 
true only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly 
(use the === operator for that) or have their properties compared, 
you can use the typeof operator. 

If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: 
because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go 
over the properties of objects to compare them.
*/

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true