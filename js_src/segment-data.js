// write the HTML required for the display
var SegmentData = function(){


    var num0 = [1,1,1,0,1,1,1];
    var num1 = [0,0,1,0,0,1,0];
    var num2 = [1,0,1,1,1,0,1];
    var num3 = [1,0,1,1,0,1,1];
    var num4 = [0,1,1,1,0,1,0];
    var num5 = [1,1,0,1,0,1,1];
    var num6 = [1,1,0,1,1,1,1];
    var num7 = [1,0,1,0,0,1,0];
    var num8 = [1,1,1,1,1,1,1];
    var num9 = [1,1,1,1,0,1,0];


    var digits = {
        num0: num0,
        num1: num1,
        num2: num2,
        num3: num3,
        num4: num4,
        num5: num5,
        num6: num6,
        num7: num7,
        num8: num8,
        num9: num9
    }

    var digitsStrings = [num0.join(''),
                    num1.join(''),
                    num2.join(''),
                    num3.join(''),
                    num4.join(''),
                    num5.join(''),
                    num6.join(''),
                    num7.join(''),
                    num8.join(''),
                    num9.join(''),
                    '0000000',    //< nothing lit
                    '1111011',    //< curly 9
                    '0101111'];   //< non-curly 6
    


   
    return {
        digits: digits,
        digitsStrings: digitsStrings
    };

}();
