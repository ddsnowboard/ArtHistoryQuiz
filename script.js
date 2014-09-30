$(document).ready(function () {
	var current = 0;
	var side = "front";
	// This is the start of the randomization feature. 
	var MASTER_CARDS = cards;
	// Note: I defined the variable "cards" as an array of objects with 2 attributes each, front and back. I make them programmatically
	// with a python script, so they're saved in a separate file, cards.js. 
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
	$("#random").click(function() {
		cards = shuffle(cards);
		current = 0;
		side = "front";
		draw();
	});
});

function draw(current, side) {
	$("#center").html(cards[current][side]);
	$("#counter").html((current+1).toString()+' of '+cards.length.toString())
}

// Borrowed from https://stackoverflow.com/a/6274398/2570117
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}