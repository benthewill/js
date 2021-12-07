// Create a function that returns true if the first array can be nested inside the second.
/* arr1 can be nested inside arr2 if:

1. arr1's min is greater than arr2's min.
1. arr1's max is less than arr2's max.
*/

function canNest (arr1, arr2){
    const arr1Sorted = arr1.sort((a,b) => a - b);
    const arr2Sorted = arr2.sort((a,b) => a - b);

    return arr1Sorted[0] > arr2Sorted[0] && arr1Sorted[arr1Sorted.length-1] < arr2Sorted[arr2Sorted.length-1];
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
