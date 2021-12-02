window.onload = function() {
	// Mixing jQuery codes with JavaScript codes: Bad!
	let ps = $('body > ps');
	console.log(ps[0]);

	//Get the last element in JavaSpriot and jQuery
	let ps = document.querySelectorAll('body > p');
	let emlength = ps.length;
	let lastPos = emlength -1;
	console.log(ps[lastPos]);

	Let psJS = document.querySelectorAll('body > p');
	let emlengthJS = psJS.length;
	let lastPosJS = emlengthJS - 1;
	console.log(psJS[lastPosJS]);

	//jQuery, eq() = equal or equivalent
	let psJQ = $('body > p');
	console.log(psJQ.eq(-1));

	//Get HTML from an element: inner HTML vs. html()
	console.log(psJS[latPosJs].innerHTML);
	console.log(psJQ.eq(-1).html()); // jQuery
	/*eq() 方法将匹配元素集缩减值指定 index 上的一个*/
	
	psJS[lastPosJS].innerHTML = 'Content Change'; // Plain Javascript
	psJQ.eq(-1)

};