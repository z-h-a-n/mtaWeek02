console.log('hello');



$(document).ready(function(){
	//allLines
	$('.lineN').on('click')
	$('.lineL').on('click')
	$('.line6').on('click')

	// line N
	$('#tsN').on('click')
	$('#34N').on('click')
	$('#28N').on('click')
	$('#23N').on('click')
	$('#tsN').on('click')
	$('#tsN').on('click')

		// line L
	$('#8L').on('click')
	$('#6L').on('click')
	$('#usL').on('click')
	$('#3L').on('click')
	$('#1L').on('click')

	// line 6
	$('#gcS').on('click')
	$('#33S').on('click')
	$('#28S').on('click')
	$('#23S').on('click')
	$('#usS').on('click')
	$('#apS').on('click')



var getOnLine = 

var getOnStop = 

var getOffLine = 

var getOffStop = 



var numberOfStops = function() {
	if (getOnLine === getOffLine) {
		return Math.abs(getOnLine.indexOf(getOnStop) - getOffLine.indexOf(getOffStop));
	} else {
		return Math.abs(getOnLine.indexOf(getOnStop) - getOnLine.indexOf(intersect())) + Math.abs(getOffLine.indexOf(getOffStop) - getOffLine.indexOf(intersect()));
	}
};

alert(numberOfStops());





});