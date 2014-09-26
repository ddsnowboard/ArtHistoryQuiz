$(document).ready(function () {
	var current = 0;
	var side = "front";
	$("#left").click(function() {
		if (!(current == 0))
			current--;
		else 
			current = cards.length - 1;
		side = 'front';
		draw(current, side);
	});
	$("#right").click(function(){
		if (!(current == cards.length - 1))
			current++;
		else
			current = 0;
		side = 'front';
		draw(current, side);
	});
	$("#center").html(cards[current][side]);
	$("#center").click(function() {
		if (side == 'front')
			side = "back";
		else
			side = "front";
		draw(current, side);
	});
});

function draw(current, side) {
	$("#center").html(cards[current][side]);
}