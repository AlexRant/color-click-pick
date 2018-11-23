var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var clicker = document.querySelector("#attention");
var button = document.querySelector("#click");
var bgButton = document.querySelector("#switch-background");


setColors();

button.addEventListener("click", function(){
	setColors();
});

clicker.addEventListener("click", function(){
	setColors();
});

bgButton.addEventListener("click", function(){
	document.body.classList.toggle("light");
});



//I - Create random color
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b +")";
}

//II - Add these colors to an array
function generateColors(num) {
	//make an array
	var arr = [];
	//add num random colors to an array
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

//III - Initial set of colors

function setColors(){
	colors = generateColors(3);
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].textContent = colors[i];
	}
}