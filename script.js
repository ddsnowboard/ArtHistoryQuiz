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
	$("#counter").html((current+1).toString()+' of '+cards.length.toString());
	$(document).keydown(function(event)
	{
		if(event.which == 32)
			$("#center").click();
		else if(event.which == 39)
			$("#right").click();
		else if(event.which == 37)
			$("#left").click();
	});
});

function draw(current, side) {
	$("#center").html(cards[current][side]);
	$("#counter").html((current+1).toString()+' of '+cards.length.toString())
}
