$(document).ready(function(e) {
	$('ul.tabs li').click(function(e) {
		$('ul.tabs li.selected').removeClass('selected');
		$(this).addClass('selected');
	});

	$('ul.tabs li .product-tab').mouseover(function(e) {
		$(this).addClass('hover');
	});

	$('ul.tabs li .product-tab').mouseout(function(e) {
		$(this).removeClass('hover');
	});

	$('ul.tabs .product-tab a').click(function(e) {
		e.preventDefault();
		$(this).blur();
	});

});