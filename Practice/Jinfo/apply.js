let obj = {
    goku : `kamehameha`,
    vegeta : `final flash`
}


let arr2 = [3,4,5,6]


let arr3 = [1,2]

arr3.push.apply(arr3, arr2)

console.log(arr3);