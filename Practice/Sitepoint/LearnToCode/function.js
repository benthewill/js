function lastChar (str) {
     return str[str.length - 1];
}

console.log(lastChar('felicia tiara'));

function reverse (str) {
     let newString = [];
     for (i = 0; i < str.length; i++) {
          newString.unshift(str[i]);
     }
     return newString.join("");
}

console.log(reverse(`kamehameha`));
console.log(reverse(reverse('ben')));

let listGrocery = [];

function add(item){
     let strItem = String(item);
     listGrocery.push(strItem);
}

function remove(item){
     let strItem = String(item);
     for (let i = 0;i < listGrocery.length;i++){
          if (listGrocery[i] == strItem){
               listGrocery.splice(i,1)
          }
     }
}

console.log(add('apples'));
console.log(add('banana'));
console.log(add('mango'));
console.log(listGrocery);
console.log(remove('banana'));
console.log(listGrocery);