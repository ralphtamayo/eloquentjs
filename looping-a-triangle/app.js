let app = {
	init: () => {
		app.printTriangle(7);
	},

	printTriangle: (size) => {
		let character = '#';
		let output = '';

		while (output.length < size) {
			output += character;

			console.log(output);
		}
	},
}

app.init();