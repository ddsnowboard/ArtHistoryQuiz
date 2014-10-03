// This is the javascript file that I have in all my websites. It makes the buttons look nice. 

$(document).ready(function () {
	$(".button").mousedown(function () {
		$(this).addClass("down");
	});
	$(".button").mouseup(function () {
		$(this).removeClass('down');
	});
	$(".button").hover(function () {
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');
	});
});
