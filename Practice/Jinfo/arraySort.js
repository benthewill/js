let arr = [1,12,33,43,111,222,9,9939]

// arr.sort((a,b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a == b) {
//         return 0;
//     }
//     if (a < b) {
//         return -1;
//     }
// })

arr.sort((a,b) => a-b)

console.log(arr);