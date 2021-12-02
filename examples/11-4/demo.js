window.onload = function() {
	/* on() = eventListener() */
	$('body > button').eq(0).on('click', function() {
		alert('Button clicked!');
	});
	
	$('body > button').on('click', function() {
		alert('Button clicked!');
	});

	/* keypress: 只會針對可以輸出文字符號的按鍵有效，也就是說ESC、方向鍵、倒退鍵......等等*/
	$('body > input').eq(0).on('keypress', function() {
		/*this 對應到目前觸發的事件 */
		let inputVal = $(this).val();
		let textarea = $('body > textarea').eq(0);
		textarea.html(inputVal);
	});
};