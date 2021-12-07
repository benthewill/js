let gameOver = false;
let guesses = 0;
let number = Math.ceil(Math.random()*10);

while(!gameOver){
  const userSaysHigher = confirm(`The current number is ${number}. Do you think the next number will be higher?`);

  const nextNumber = Math.ceil(Math.random()*10);

  if(nextNumber > number && userSaysHigher || nextNumber <= number && !userSaysHigher){
      alert(`Correct! It was ${nextNumber}.`);
    guesses ++;
    number = nextNumber;
    } else {
      alert(`Wrong! It was ${nextNumber}`);
      gameOver = true
    }
}
alert(`Game Over! You managed to guess correctly ${guesses} times.`);

console.log(guesses)