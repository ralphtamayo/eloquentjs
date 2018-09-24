let app = {
	init: () => {
		let first = 5;
		let second = 24;

		console.log(`First number: ${first}`);
		console.log(`Second number: ${second}`);

		console.log(`Min: ${app.min(first, second)}`);
	},
	min: (x, y) => {
		return x < y ? x : y;
	}
}

app.init();