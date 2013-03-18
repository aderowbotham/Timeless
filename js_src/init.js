/**
 * init jquery then start application
 *
 */

$(document).ready(function(){
        
        //empty container and write clock display
    	$('#clock-container').empty();
		$('#clock-container').html(BuildClock.buildClock());


        $('#clock-container').click(function(){            
            mashDisplay = !mashDisplay;
            updateTime(true);
        });
        

        DisplayController.init();

        
        mashDisplay = true;

        secondCounter = window.setInterval(function() {updateTime();}, 1000);


        function updateTime(forceRefresh){

            if(forceRefresh == null){
                forceRefresh = false;
            }

            date = new Date();
            hours = date.getHours();
            mins = date.getMinutes();
            secs = date.getSeconds();

            digitsArray = getDigitsArray(hours,mins,secs);



            DisplayController.showTime(digitsArray,mashDisplay,forceRefresh);
            DisplayController.showSeperators();

            if(!forceRefresh)
                window.setTimeout(function() {hideSeperators();}, 500);
            
            
	}

        function hideSeperators(){
            DisplayController.hideSeperators();
        }

        function getDigitsArray(h,m,s){
            

            hStr = h.toString();
            mStr = m.toString();
            sStr = s.toString();

            if(hStr.length < 2)
                hStr = '0'+hStr;
            
            if(mStr.length < 2)
                mStr = '0'+mStr;

            if(sStr.length < 2)
                sStr = '0'+sStr;

            

            retArr = new Array();

            retArr.push(parseInt(hStr.substr(0, 1)));
            retArr.push(parseInt(hStr.substr(1, 1)));

            retArr.push(parseInt(mStr.substr(0, 1)));
            retArr.push(parseInt(mStr.substr(1, 1)));

            retArr.push(parseInt(sStr.substr(0, 1)));
            retArr.push(parseInt(sStr.substr(1, 1)));

            return retArr;
        }

	
	
});
