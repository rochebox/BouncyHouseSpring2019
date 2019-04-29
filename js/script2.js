//alert("hi");
console.log("Have a nice day");

//variables for the program
var howManyDots = prompt("How many dots would you like");
var howManyMade = 0;

console.log(howManyDots);


var xLocs = new Array();
var yLocs = new Array();
var dXSpeed = new Array();
var dYSpeed = new Array();
var dotColor = new Array();

var dotSize =15;

var colors = ['Aquamarine', 'CadetBlue', 'Chocolate',
'CornflowerBlue', 'Cyan', 'DarkBlue',
'#00008b', 'DarkGreen', 'DarkSlateBlue', 'DeepSkyBlue',
'FireBrick', 'Gold', 'GreenYellow', 'HotPink',
'Indigo', 'LightBlue', 'LightGreen', 
'LightSeaGreen', 'LimeGreen', 'Maroon', 
'MediumSeaGreen', 'MediumSlateBlue'
];

var totalColors = colors.length;
console.log("The total num of colors is " + totalColors);

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

var rect = canvas.getBoundingClientRect();

var canvasW = rect.right - rect.left;

//alert("rect.top is " + rect.top);
//alert("rect.bottom is " + rect.bottom);
var canvasH = rect.bottom - rect.top;
//alert("canvas height is " + canvasH);


function getMousePosition(canvas, event) {

 	//var rect = canvas.getBoundingClientRect();
 	var xL = event.clientX - rect.left;
 	var yL = event.clientY - rect.top;

 	alert("xL is " + xL + " and yL is " + yL);

 	return {
 		x: xL,
 		y: yL
 	};
 }
 	
/*
	return {

		x: xL;
		y: yL;
	};
	*/



function doAlert() {
	alert("Hey you clicked the canvas")
};



canvas.addEventListener( 'mousedown', function(event) {

	alert("Hi from function event -- you clicked canvas");
	var mousePos = getMousePosition(canvas, event);
	alert("Back from getMousePosition and mousePos is " + mousePos.x 
		+ ", " + mousePos.y);

}


	);

	




