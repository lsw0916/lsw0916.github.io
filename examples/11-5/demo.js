windows.onload = function() {
	/*
	$('body > div').on('click', function() {
		//$(this).css('background-color', 'red');

		//Change multiple CSS properties
	     let newCSS = {
		     'background-color': 'red',
		     'font-size': '200%' //兩倍大
	    };
		$(this).css(newCSS);
	});
	*/
	
	$('div > button').on('click', function(event) {
		event.stopPropagation();
		alert('button clicked!');
	});
};