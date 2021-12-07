function rangeNum (start, end, step=1){
    let arr = [];
    if (end > start){
        for (let i = 0; i < (end-start) + 1; i += step){
            arr.push(start + i);
        }    
    }
    else {
        for (let i = 0; i < (start-end) + 1; i += step){
            arr.push(start - i);
        }
    }
    return arr;
}

function sumRangeNum (arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

function sumRangeRed (arr){
    return arr.reduce(((a,b) => a + b),0);
}

console.log (rangeNum (1,10));
console.log (sumRangeNum(rangeNum(2,5)));
console.log (sumRangeRed(rangeNum(3,5)));