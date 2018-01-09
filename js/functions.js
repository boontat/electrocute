document.onkeydown = function(e) {
	let elem = document.getElementById('audio-container');
	let basePath = 'data/sounds/';
	switch (e.keyCode) {
		case 65:
			elem.setAttribute('src',basePath+"A.mp3");
			break;
		case 81:
			elem.setAttribute('src',basePath+"Q.mp3");
			break;
		default:
			elem.removeAttribute('src');
			console.log("Key is not found!", e.keyCode);
	};

	if (elem.hasAttribute('src')) {
		elem.play();
	}
};