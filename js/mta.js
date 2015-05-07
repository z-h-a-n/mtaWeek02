console.log('Please behave eventListeners!');



$(document).ready(function(){
//allLines
$('.lineN').on('click', getLine)
$('.lineL').on('click', getLine)
$('.line6').on('click', getLine)

// line N
$('#tsN').on('click', getStop)
$('#34N').on('click', getStop)
$('#28N').on('click', getStop)
$('#23N').on('click', getStop)
$('#usN').on('click', getStop)
$('#8N').on('click', getStop)

	// line L
$('#8L').on('click', getStop)
$('#6L').on('click', getStop)
$('#usL').on('click', getStop)
$('#3L').on('click', getStop)
$('#1L').on('click', getStop)

// line 6
$('#gcS').on('click', getStop)
$('#33S').on('click', getStop)
$('#28S').on('click', getStop)
$('#23S').on('click', getStop)
$('#usS').on('click', getStop)
$('#apS').on('click', getStop)

var lineN = ['tsN', '34N', '28N', '23N', 'usN', '8N'];

var lineN= ['8L', '6L', 'usL', '3L', '1L'];

var line6 = ['gcS', '33S', '28S', '23S', 'usS', 'apS'];




//check if the two lines are the same
function changeLines (bothLines) {
	console.log(bothLines[0]);
	console.log(bothLines[1]);
	if (bothLines.length > 1) {
		if (bothLines[0] === bothLines[1]) {
			console.log('same line');
		} else {
			console.log('different lines')
		}
	}
	
}



//put lines from clicked buttons in an array
var bothLines = [];
function getBothLines(line) {
	var lineX = bothLines.push(line);
	changeLines(bothLines);
};



//return number of stops 
function numberOfStops (bothStops) {
	var totalStops = Math.abs(lineN.indexOf(bothStops[0]) - lineN.indexOf(bothStops[1]));
	//if more than 1 button is clicked, 
	if(bothStops.length > 1) {
	// console.log(totalStops);
	};

}

//put stops from clicked buttons in an array
var bothStops = [];
function getBothStops(stop) {
	var stopX = bothStops.push(stop);
	numberOfStops(bothStops);
}

//get input lines from the button
function getLine() {
	var line = $(this).attr('class');
	getBothLines(line);
	// console.log(line);
}


//get input stops from the button
function getStop() {
	var stop = $(this).attr('id');
	getBothStops(stop);
}






// function numberOfStops () {

// 	return getOnStop + getOffStop;

// }

// console.log(numberOfStops());

// var numberOfStops = function() {
// 	if (getOnLine === getOffLine) {
// 		return Math.abs(getOnLine.indexOf(getOnStop) - getOffLine.indexOf(getOffStop));
// 	} else {
// 		return Math.abs(getOnLine.indexOf(getOnStop) - getOnLine.indexOf(intersect())) + Math.abs(getOffLine.indexOf(getOffStop) - getOffLine.indexOf(intersect()));
// 	}
// };

// alert(numberOfStops());





});