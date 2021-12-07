// Can you reach your friend's tile number in the next roll?
// Create a function that returns if it's possible to earn a bonus when you roll the dice.

//my code
function possibleBonus(a, b) {
	let test = a + 6;
	
	if (a == b || a > b || test < b){
		return false;
	}
	else {
	for (var i = 0; i < 7 ; i++){
		var add = a + i;
		if (add == b){
			return true;
		}
	}
}
}

// better codes
/* function possibleBonus(a, b) {
	return b - a <= 6 && b - a > 0
}

/* possibleBonus=(a, b, c=b-a)=>c>0 && c<7 */

/* function possibleBonus(a, b) {
	return (a<b && b-a <= 6)} 
*/