let container = document.querySelector(".container")
var generateColor = function () {
	// The available hex options
	var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var color = "#";
    	// Create a six-digit hex color
	for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hex.length);

        color += hex[randomIndex];
	}
        // Return the color string
    container.style.background = color;

};
