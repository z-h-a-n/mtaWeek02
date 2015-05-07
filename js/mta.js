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

var n = ['tsN', '34N', '28N', '23N', 'usN', '8N'];

var l= ['8L', '6L', 'usL', '3L', '1L'];

var s = ['gcS', '33S', '28S', '23S', 'usS', 'apS'];




//listening to class='lineN'
function getLine() {
	
};


function numberOfStops (bothStops) {
	var totalStops = Math.abs(n.indexOf(bothStops[0]) - n.indexOf(bothStops[1]));

	if(bothStops.length > 1) {
	// console.log(n.indexOf(bothStops[0]));
	// console.log(n.indexOf(bothStops[1]));
	// console.log(bothStops);
	console.log(totalStops);
	// console.log(bothStops.length);
	};

}


var bothStops = [];
function getBothStop(stop) {
	var stopX = bothStops.push(stop);
	numberOfStops(bothStops);
}



//listening to id='23N'
function getStop() {
	stop = $(this).attr('id');
	getBothStop(stop);
}

	// console.log(stop);



//listening to id='23N'


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