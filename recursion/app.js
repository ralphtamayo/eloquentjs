let app = {
	init: () => {
		console.log('Is 50 even? ' + app.isEven(50));
		console.log('Is 75 even? ' + app.isEven(75));
		console.log('Is -1 even? ' + app.isEven(-1));
	},
	isEven: (number) => {
		if (number < 0) {
			return 'Error: Input number is below zero.';
		}

		if (number === 0) {
			return true;
		}

		if (number === 1) {
			return false;
		}

		return app.isEven(number - 2);
	}
}

app.init();