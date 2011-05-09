// write the HTML required for the display
var BuildClock = function(){

    var buildClock = function(){
        
    var minSeparator = '<div id="seperators-mins" class="segment"></div>';
	var secsSeparator = '<div id="seperators-secs" class="segment"></div>';
	
	var sevenSegs = '';
	sevenSegs += '<div class="segment t"></div>';
	sevenSegs += '<div class="segment tl"></div>';
	sevenSegs += '<div class="segment tr"></div>';
	sevenSegs += '<div class="segment m"></div>';
	sevenSegs += '<div class="segment bl"></div>';
	sevenSegs += '<div class="segment br"></div>';
	sevenSegs += '<div class="segment b"></div>';
	
	var displayA = '<div id="displayA" class="display-unit">'+sevenSegs+'</div>';
	var displayB = '<div id="displayB" class="display-unit">'+sevenSegs+'</div>';
	
	var displayC = '<div id="displayC" class="display-unit">'+sevenSegs+'</div>';
	var displayD = '<div id="displayD" class="display-unit">'+sevenSegs+'</div>';
	
	var displayE = '<div id="displayE" class="display-unit">'+sevenSegs+'</div>';
	var displayF = '<div id="displayF" class="display-unit">'+sevenSegs+'</div>';
	
	return '<div id="clock">' + displayA + displayB + minSeparator + displayC + displayD + secsSeparator + displayE + displayF + '</div>';

    }

   
    return {
        buildClock: buildClock
    };

}();
