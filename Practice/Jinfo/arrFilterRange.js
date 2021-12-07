let array = [1,3,5,1,1,9,20,2,7,15,13,49]

function filterRange (arr, a, b) {
    return arr.filter((x) => x >= a && x <= b)
}

console.log(filterRange(array,4,15));

let arrTest = [5, 3, 8, 1];

function testFilter(arr, a, b) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}



console.log(testFilter(arrTest,1,4))