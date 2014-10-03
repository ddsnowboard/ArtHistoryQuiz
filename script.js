// This is the script that governs the switching of the cards on the page. 
// Don't change this unless you know what you're doing and want to add something. 
$(document).ready(function () {
	// The current card being shown. Starts at 0 (arrays are zero-indexed). 
	var current = 0;
	// What side we're on. Either "front" or "back". Anything else will throw an error. This is case-sensitive. 
	var side = "front";
	// I defined the variable "cards" as an array of objects with 2 attributes each, front and back. I make them programmatically
	// with a python script, so they're saved in a separate file, cards.js. That's why they're not here and your editor might yell at you for 
	// talking about them. 
	// Initializes the first card on screen. 
	$("#center").html(cards[current][side]);
	// Initializes the counter. 
	$("#counter").html((current+1).toString()+' of '+cards.length.toString());
	// This just governs behavior of the left arrow button. 
	$("#left").click(function() {
		// I need this if/else to cover wrapping around to the end if you go left from card 0. 
		if (current !== 0)
			current--;
		else 
			current = cards.length - 1;
		// Always show the front side of a card when you switch to it. 
		side = 'front';
		// This actually puts the stuff you just did on the page, lest it just be in this script but invisible to the user. 
		draw(current, side);
	});
	// See above. 
	$("#right").click(function(){
		if (current !== cards.length - 1)
			current++;
		else
			current = 0;
		side = 'front';
		draw(current, side);
	});
	// Flips the card. 
	$("#center").click(function() {
		if (side === 'front')
			side = "back";
		else
			side = "front";
		draw(current, side);
	});
	// This function governs everything that happens when some key is pressed. 
	$(document).keydown(function(event)
	{
		// Key 32 is space; if you press it, flip the card (i.e. do what would be done if you clicked the center. 
		if(event.which == 32)
			$("#center").click();
		// Key 39 is right. 
		else if(event.which == 39)
			$("#right").click();
		// Key 37 is left. 
		else if(event.which == 37)
			$("#left").click();
	});
	// This shuffles the cards. 
	$("#random").click(function() {
		cards = shuffle(cards);
		current = 0;
		side = "front";
		draw(current, side);
	});
	// I couldn't get the functionality to go get a master list and re-set it to be the actual list to run right, so this just refreshes the page. 
	$("#unshuffle").click(function() {
		location.reload();
	});
});
// Puts the current setup on the screen. 
function draw(current, side) {
	$("#center").html(cards[current][side]);
	$("#counter").html((current+1).toString()+' of '+cards.length.toString());
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