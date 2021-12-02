window.onload = function() {
	let button = document.querySelector('button');
	/* 監聽 */
	button.addEventListener('click', function(event) {
		event.stopPropagation(); // In the 'event' object, there's a stopPropagation function.
		//after stop Propagation, stop bubbling.
		alert('button clicked!');
	});
	let div = document.querySelector('div');
	div.addEventListener('click', function() {
		this.style.backgroundColor = 'red';
	});
}