document.onkeydown = function(e) {
	let mapper = require('../data/json/mapper.json');
	let audioContainer = document.getElementById('audio-container');
	let basePath = 'data/sounds/';
	let extension = '.mp3';

	if (mapper[e.keyCode]) {
		let alphabet = mapper[e.keyCode];
		audioContainer.setAttribute('src', basePath + alphabet + extension);
		displayAlphabet(alphabet);
	} else {
		audioContainer.removeAttribute('src');
		console.log("Key is not found!", e.keyCode);
	}

	if (audioContainer.hasAttribute('src')) {
		audioContainer.play();
	}
};


function displayAlphabet (alphabet) {
	let alphabetContainer = document.getElementById('alphabet-container');
	let staticText = 'Displaying alphabet ~ ';
	alphabetContainer.innerHTML = staticText + alphabet;
}