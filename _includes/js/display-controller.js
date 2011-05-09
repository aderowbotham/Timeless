// write the HTML required for the display
var DisplayController = function(){

    var allUnits;

    var prevDigitsArray = ['_','_','_','_','_','_'];

    var init = function(){

        hours1 = new DisplayUnit('#displayA');
        hours2 = new DisplayUnit('#displayB');
        mins1  = new DisplayUnit('#displayC');
        mins2  = new DisplayUnit('#displayD');
        secs1  = new DisplayUnit('#displayE');
        secs2  = new DisplayUnit('#displayF');

        allUnits = new Array(hours1,hours2,mins1,mins2,secs1,secs2);

        hideSeperators();

    }

  
    var showAll = function(){
       for(var i=0; i<allUnits.length; i++){
           allUnits[i].showAll();
       }
    };

    var hideAll = function(){
       for(var i=0; i<allUnits.length; i++){
           allUnits[i].hideAll();
       }
    };


    var showSeperators = function(){
        $('#seperators-mins').show();
        $('#seperators-secs').show();
    }

    var hideSeperators = function(){
        $('#seperators-mins').hide();
        $('#seperators-secs').hide();
    }

    var showTime = function(digitsArray,mashDisplay,forceRefresh){

        
        if(digitsArray.length != 6)
            throw new Error('Digits array must have a length of six');




        if(mashDisplay){

            //for each digit
            for(var i=0; i<digitsArray.length; i++){

                //find which 'real' time digits have changed
                if(digitsArray[i] == prevDigitsArray[i] && forceRefresh == false)
                    continue;
                

                //repeat until random sequence is not a real digit
                var realDigit = true;

                while(realDigit){

                    realDigit = false;

                    var segData = getRandomSegments();

                    var compareString = segData.join('');

                    for(var k=0; k<SegmentData.digitsStrings.length; k++){
                       if(compareString == SegmentData.digitsStrings[k]){
                           realDigit = true;
                       }
                    }
                }

                //light segments for this digit
                allUnits[i].setSegments(segData);


                
                

           }

           prevDigitsArray = digitsArray;


        } else {

            prevDigitsArray = digitsArray;

            for(i=0; i<digitsArray.length; i++){
                segData = SegmentData.digits['num'+digitsArray[i]];
                allUnits[i].setSegments(segData);
            }
        }


    }


    function getRandomSegments(){
        var segData = new Array();
        for(var j=0; j<7; j++){
            (Math.random() < 0.5) ? segData.push(0) : segData.push(1);
        }
        return segData;
    }



   
    return {
        showTime: showTime,
        init: init,
        showAll: showAll,
        hideAll: hideAll,
        showSeperators: showSeperators,
        hideSeperators: hideSeperators
    };

}();
