// Variables for mesuring time
var createdTime; var clickedTime; var reactionTime;

// Get random color for game element
function getRandomColor() {

	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	// console.log("The color is " + color);
	return color;
}

// Create game element
function makeBox() {
	// Set timeout before the game element appears on screen
	setTimeout(function () {
		if (Math.random() > 0.5) {
			// Turn the box into the circle
			document.getElementById("box").style.borderRadius = "50%";
		} else {
			// Get standart box
			document.getElementById("box").style.borderRadius = "10%";
		}
		// Get random position
		document.getElementById("box").style.top=(Math.random() * 300) + "px";
		document.getElementById("box").style.left=(Math.random() * 500) + "px";
		// Get random color
		document.getElementById("box").style.backgroundColor=getRandomColor();

		// Make element visible
		document.getElementById("box").style.display="block";

		// Get creation time
		createdTime=Date.now();
	}, Math.random() * 5000);
}

// Hide game element and measure reaction time
document.getElementById("box").onclick=function() {
	// Get time when element was clicked
	clickedTime=Date.now();

	// Make element invisible
	this.style.display="none";

	// Measure reaction time
	reactionTime=(clickedTime-createdTime) / 1000;

	// Update results with reaction time for the round
	document.getElementById("time").innerHTML=reactionTime + "s";

	// Recursive call for making new game element
	makeBox();
}

// Start the game
document.getElementById("start").onclick=function() {
	// Hide start button
	this.style.display="none";

	// Create game element
	makeBox();

	// Make result visible
	document.getElementById("reaction").style.display="block";
}