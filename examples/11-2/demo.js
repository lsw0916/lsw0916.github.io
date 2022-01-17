window.onload = function() {
	// $ = jquery
	// $(selector)
	let ps = $('body > p'); //find the amount of p in body
	console.log(ps);

	let firstP = $('body > p#first');
	console.log(firstP);

	let specialPs = $('body > p.class');
	console.log(specialPs);

};