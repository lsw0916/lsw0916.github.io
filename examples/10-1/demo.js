function changeDivCSS() {
	let buttonId = this.id;
	let divs = document.getElementsByTagName('div');
	if(buttonId === 'changeDiv1') {
		divs[0].style.cssText = 'background-color: red; width: 100px; height: 40px';
	}
	else if(buttonId === 'changeDiv2') {
		divs[1].style.cssText = 'background-color: black; width: 60px; height: 200px';
	}
	else {
		divs[2].style.cssText = 'background-color: gold; width: 200px; height: 200px'
	}
};

window.onload = function() {
	if(true) {
		//alert('true!');
	}
	else {
		//alert('false!');
	}

	// === : completely same
	if(1 === 2) {
		alert('true!');
	}
	else {
		alert('false');
	}

	if(2 !== '2') {
		alert('true!');
	}
	else if('a' === 'b') {
		alert('Condition 2 is true!');
	}
	else {
		alert('Neither is true QQ.');
	}

	if(2===2 && 15===20) {
		alert('Condition 1 is true.');
	}
	else if(2 === 2 || 15 === 10) {
		alert('Condition 2 is ture.');
	}
	else {
		alert('Condition 2 is true.');
	}

	document.getElementById('changeDiv1').addEventListener('click', changeDivCSS);
};