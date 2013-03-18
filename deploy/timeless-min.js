var SegmentData=function(){var a=[1,1,1,0,1,1,1],b=[0,0,1,0,0,1,0],c=[1,0,1,1,1,0,1],d=[1,0,1,1,0,1,1],e=[0,1,1,1,0,1,0],f=[1,1,0,1,0,1,1],g=[1,1,0,1,1,1,1],h=[1,0,1,0,0,1,0],i=[1,1,1,1,1,1,1],j=[1,1,1,1,0,1,0],k={num0:a,num1:b,num2:c,num3:d,num4:e,num5:f,num6:g,num7:h,num8:i,num9:j},l=[a.join(""),b.join(""),c.join(""),d.join(""),e.join(""),f.join(""),g.join(""),h.join(""),i.join(""),j.join(""),"0000000","1111011","0101111"];return{digits:k,digitsStrings:l}}();
var BuildClock=function(){var a=function(){var a='<div id="seperators-mins" class="segment"></div>',b='<div id="seperators-secs" class="segment"></div>',c="";c+='<div class="segment t"></div>',c+='<div class="segment tl"></div>',c+='<div class="segment tr"></div>',c+='<div class="segment m"></div>',c+='<div class="segment bl"></div>',c+='<div class="segment br"></div>',c+='<div class="segment b"></div>';var d='<div id="displayA" class="display-unit">'+c+"</div>",e='<div id="displayB" class="display-unit">'+c+"</div>",f='<div id="displayC" class="display-unit">'+c+"</div>",g='<div id="displayD" class="display-unit">'+c+"</div>",h='<div id="displayE" class="display-unit">'+c+"</div>",i='<div id="displayF" class="display-unit">'+c+"</div>";return'<div id="clock">'+d+e+a+f+g+b+h+i+"</div>"};return{buildClock:a}}();
var Effects=function(){var a=function(a){function b(){$("#clock").show(),window.setTimeout(function(){c()},Math.round(a/2))}function c(){$("#clock").hide()}a==null&&(a=1e3),$("#clock").hide(),cInterval=window.setInterval(function(){b()},a)};return{startBlink:a}}();
var DisplayUnit=function(){var a=function(a){function e(){return t=$(a+" .t"),tl=$(a+" .tl"),tr=$(a+" .tr"),m=$(a+" .m"),bl=$(a+" .bl"),br=$(a+" .br"),b=$(a+" .b"),new Array(t,tl,tr,m,bl,br,b)}function f(){for(var a=0;a<d.length;a++)d[a].hide();c=[0,0,0,0,0,0,0]}function g(){for(var a=0;a<d.length;a++)d[a].show();c=[1,1,1,1,1,1,1]}var c=new Array(0,0,0,0,0,0,0);this.domId=a,this.domObject=$(a);var d=e();f(),this.identify=function(){return this.domId},this.getDomObject=function(){return this.domObject},this.hideAll=function(){f()},this.showAll=function(){g()},this.setSegments=function(a){if(a.length!=7)throw new Error("Length of activation array must be 7");for(var b=0;b<a.length;b++)a[b]!=c[b]&&(c[b]=a[b],a[b]==1?d[b].show():d[b].hide())}};return function(b){return new a(b)}}();
var DisplayController=function(){function i(){var a=new Array;for(var b=0;b<7;b++)Math.random()<.5?a.push(0):a.push(1);return a}var a,b=["_","_","_","_","_","_"],c=function(){hours1=new DisplayUnit("#displayA"),hours2=new DisplayUnit("#displayB"),mins1=new DisplayUnit("#displayC"),mins2=new DisplayUnit("#displayD"),secs1=new DisplayUnit("#displayE"),secs2=new DisplayUnit("#displayF"),a=new Array(hours1,hours2,mins1,mins2,secs1,secs2),g()},d=function(){for(var b=0;b<a.length;b++)a[b].showAll()},e=function(){for(var b=0;b<a.length;b++)a[b].hideAll()},f=function(){$("#seperators-mins").show(),$("#seperators-secs").show()},g=function(){$("#seperators-mins").hide(),$("#seperators-secs").hide()},h=function(c,d,e){if(c.length!=6)throw new Error("Digits array must have a length of six");if(d){for(var f=0;f<c.length;f++){if(c[f]==b[f]&&e==0)continue;var g=!0;while(g){g=!1;var h=i(),j=h.join("");for(var k=0;k<SegmentData.digitsStrings.length;k++)j==SegmentData.digitsStrings[k]&&(g=!0)}a[f].setSegments(h)}b=c}else{b=c;for(f=0;f<c.length;f++)h=SegmentData.digits["num"+c[f]],a[f].setSegments(h)}};return{showTime:h,init:c,showAll:d,hideAll:e,showSeperators:f,hideSeperators:g}}();
$(document).ready(function(){function a(a){a==null&&(a=!1),date=new Date,hours=date.getHours(),mins=date.getMinutes(),secs=date.getSeconds(),digitsArray=c(hours,mins,secs),DisplayController.showTime(digitsArray,mashDisplay,a),DisplayController.showSeperators(),a||window.setTimeout(function(){b()},500)}function b(){DisplayController.hideSeperators()}function c(a,b,c){return hStr=a.toString(),mStr=b.toString(),sStr=c.toString(),hStr.length<2&&(hStr="0"+hStr),mStr.length<2&&(mStr="0"+mStr),sStr.length<2&&(sStr="0"+sStr),retArr=new Array,retArr.push(parseInt(hStr.substr(0,1))),retArr.push(parseInt(hStr.substr(1,1))),retArr.push(parseInt(mStr.substr(0,1))),retArr.push(parseInt(mStr.substr(1,1))),retArr.push(parseInt(sStr.substr(0,1))),retArr.push(parseInt(sStr.substr(1,1))),retArr}$("#clock-container").empty(),$("#clock-container").html(BuildClock.buildClock()),$("#clock-container").click(function(){mashDisplay=!mashDisplay,a(!0)}),DisplayController.init(),mashDisplay=!0,secondCounter=window.setInterval(function(){a()},1e3)});
