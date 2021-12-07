function ZeroPadding(item, index, width){
    let stringed = String(index);
    let stringedItem = String(item);
    for (let i = stringed.length; i < width; i++){
        stringed = '0' + stringed;
    }
    return stringed + " " + stringedItem;
}

console.log(ZeroPadding('water', 8, 5)); 
console.log(ZeroPadding('air', 22, 5)); 
console.log(ZeroPadding('earth', 110, 5)); 
console.log(ZeroPadding('fire', 1, 5)); 

console.log(String(77).padStart(3, 'X'));



