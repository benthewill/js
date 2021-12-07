const isDoubleton = num => new Set(String(num)).size === 2;

const doubleton = num => {
	do {
		num += 1
	} while (!isDoubleton(num));

	return num;
};

console.log(doubleton(30))