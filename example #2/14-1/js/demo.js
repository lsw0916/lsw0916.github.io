window.onload {
	$('nav > a:first-of-type').on('click', function(event) {
		event.preventDefault(); // Stop the navigating default first <a> elements under <nav>
		$('nav > a:not(:first-of-type)').toggle(); // Take all the non-fo
	});
}