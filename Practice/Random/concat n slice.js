function remove(array,index){
    return array.slice(0,index).concat(array.slice(index+1));
}

let rem = (array,index) => {return array.slice(0,index).concat(array.slice(index+1));}

console.log(rem([2,3,4,14,1,1,3,4,1,4],2));