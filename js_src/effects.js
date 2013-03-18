// write the HTML required for the display
var Effects = function(){

    var startBlink = function(interval){

        if(interval == null){
            interval = 1000;
        }
        
        $('#clock').hide();

	//cInterval = setInterval('blink()', 1000);
	cInterval = window.setInterval(function() { showAll(); }, interval);

	function showAll(){
		$('#clock').show();
		window.setTimeout(function() { hideAll(); }, Math.round(interval/2));
	}

	function hideAll(){
		$('#clock').hide();
	}

    }

    

   
    return {
        startBlink: startBlink
    };

}();
