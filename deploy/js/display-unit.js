var DisplayUnit = (function(){

    var DisplayUnit = function(domId){

        //class vars
        var activeSegments = new Array(0,0,0,0,0,0,0);

        

        this.domId = domId;
        this.domObject = $(domId);

        //identify actual segments
        var domSegments = attachSegments();
        forceHideAll();
        
                

        // -- public methods -- //
        
        this.identify = function(){
            return this.domId;
        };

        this.getDomObject = function(){
            return this.domObject;
        };

        this.hideAll = function(){
            forceHideAll();
        };

        this.showAll = function(){
            forceShowAll();
        };

               

        //set segments - key function
        this.setSegments = function(activationArray){

            //check
            if(activationArray.length != 7)
                throw new Error("Length of activation array must be 7");

            //change units that need changing
            for(var i = 0; i<activationArray.length; i++){

                if(activationArray[i] != activeSegments[i]){                    
                    activeSegments[i] = activationArray[i];
                    (activationArray[i] == 1)? domSegments[i].show() : domSegments[i].hide();
                } else {
                    //do nothing (segment already set correctly)
                    
                }
            }
        }


        // -- private methods -- //


        //assign a segment DOM objects to variables
        function attachSegments(){

            t  = $(domId+' .t');
            tl = $(domId+' .tl');
            tr = $(domId+' .tr');
            m  = $(domId+' .m');
            bl = $(domId+' .bl');
            br = $(domId+' .br');
            b = $(domId+' .b');

            return new Array(t,tl,tr,m,bl,br,b);
        }


        function forceHideAll(){
            for(var i=0; i<domSegments.length; i++){
                domSegments[i].hide();
            }
            activeSegments = [0,0,0,0,0,0,0];
        }

        //private methods
        function forceShowAll(){
            for(var i=0; i<domSegments.length; i++){
                domSegments[i].show();
            }
            activeSegments = [1,1,1,1,1,1,1];
        }



    };



    return function (domId){
        return new DisplayUnit(domId);
    }



})();
