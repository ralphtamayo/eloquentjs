let app = {
	init: () => {
		app.chessboard(8);
	},
	chessboard: (size) => {
		let first = ' ';
		let second = '#';
		let output = '';

		let column = 1;
		while (column <= size) {
			let row = 1;
			let start = app.isEven(column) ? first : second;
			let next = app.isEven(column) ? second : first;

			while (row <= size) {
				output += app.isEven(row) ? start : next;

				row ++;
			}

			output += '\n';
			column ++;
		}

		console.log(output);
	},
	isEven: (number) => {
		return number % 2 === 0;
	}
}

app.init();