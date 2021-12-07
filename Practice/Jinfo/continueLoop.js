for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    console.log(i); 
  }

for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue;

  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let i = 0;

while (i<3){
  console.log(`number ${i}!`);
  i++;
}