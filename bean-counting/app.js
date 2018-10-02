let app = {
	init: () => {
		console.log(app.countBs('Big bigger Biggest'));
		console.log(app.countChar('Ralph Tamayo', 'a'));
	},
	countBs: (word) => {
		return app.countChar(word, 'B');
	},
	countChar: (word, character) => {
		return (word.match(new RegExp(character, 'g')) || []).length;
	},
}

app.init();