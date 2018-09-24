let app = {
	init: () => {
		app.printTriangle(7);
	},

	printTriangle: (size) => {
		let character = '#';
		let output = '';

		for (let i = 1; i <= size; i++ ) {
			output += character;

			console.log(output);
		}
	},
}

app.init();