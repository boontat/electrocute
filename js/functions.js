document.onkeydown = function(e) {
	let mapper = require('../data/json/mapper.json');
	let audioContainer = document.getElementById('audio-container');
	let basePath = 'data/sounds/';
	let extension = '.mp3';

	if (mapper[e.keyCode]) {
		let char = mapper[e.keyCode];
		audioContainer.setAttribute('src', basePath + char + extension);
		displayAlphabet(char);
	} else {
		audioContainer.removeAttribute('src');
		console.log("Key is not found!", e.keyCode);
	}

	if (audioContainer.hasAttribute('src')) {
		audioContainer.play();
	}
};


function displayAlphabet (char) {
	let regex = /[0-9]/g;
	let alphabetContainer = document.getElementById('alphabet-container');
	let staticText = 'Displaying alphabet ~ ';
	let staticNumber = 'Displaying number ~ ';
	let fullText;
	if (!char.match(regex)) {
		fullText = staticText + char;
	} else {
		fullText = staticNumber + char;
	}
	alphabetContainer.innerHTML = fullText;
}