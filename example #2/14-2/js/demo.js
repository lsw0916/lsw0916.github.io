var menuOpen = false; // the default state of the floating menu

window.onload = function() {
	$('nav > a:first-of-type').on('click', function(event) {
		event.preventDefault();

		if(menuOpen) {

			menuItems.each(function(index) {
				setTimeout(function() {
					menuItems.eq(index).animate({'opacity':0}, 300, function(){
						menuItems.eq(index).css({'display':'none'});
					}
				});
			}, delay + (50 * index));
		    // can't use 'this' here since 'this' correspond to <body>
			$('nav > a:first-of-type').removeClass('close');
			menuOpen = false; // reset
		} 
		// when menuOpen is false, try to show the entire menu
		else {
			menuItems.each(function(index) {
				setTimeout(function() {
					menuItems.eq(index).animate({'opacity':0}, 300, function(){
						menuItems.eq(index).css({'display':'none'});
					}
				});
			}, delay + (50 * index));
			$(this).removeClass('close');
			menuOpen = false; // reset
		};
	});
}