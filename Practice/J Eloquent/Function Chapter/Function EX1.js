function lowest(a,b){
  if (a<b){
    return a;
  } else if(a==b){
    return `${a} and ${b} are the same`;
  } 
  else {
    return b;
  }
}

console.log(lowest(5,8));

console.log(lowest(12,8));

console.log(lowest(5,5));
