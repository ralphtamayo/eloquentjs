let app = {
	init: () => {
		app.fizzbuzz(1, 100);
	},

	fizzbuzz: (start, end) => {
		let current = start;

		while (current <= end) {
			let isDivisibileByThree = current % 3 === 0;
			let isDivisibileByFive = current % 5 === 0;

			if (isDivisibileByThree && isDivisibileByFive) {
				console.log('Fizzbuzz');
			} else if (isDivisibileByThree) {
				console.log('Fizz');
			} else if (isDivisibileByFive) {
				console.log('Buzz');
			} else {
				console.log(current);
			}

			current ++;
		}
	},
}

app.init();