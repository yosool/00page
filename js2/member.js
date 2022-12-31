$(document).ready(function(){
    
    
   var windowWidth = $( window ).width();
if(windowWidth < 768) {
    //모바일사이즈
    
     /* 00page로고 .5초마다 랜덤하게 바뀌기 */
    divs = ['d1','d2','d3','d4','d5','d6','d7'];

        function hideDivs() {
        for (var i=0; i<divs.length; i++)
        document.getElementById(divs[i]).style.display = 'none';
        }

        function showDiv() {
        hideDivs(); //hide them all before we show the next one.
        var randomDiv = divs[Math.floor(Math.random()*divs.length)];
        var div = document.getElementById(randomDiv).style.display =
        'block';

        setTimeout(showDiv,500); //set a delay before showing the next div

        }

        showDiv(); // 로고랜덤 끝
    
    
        
    
} else {
    //웹사이즈
    
    
    
    
     /* 00page로고 .5초마다 랜덤하게 바뀌기 */
    divs = ['d1','d2','d3','d4','d5','d6','d7'];

        function hideDivs() {
        for (var i=0; i<divs.length; i++)
        document.getElementById(divs[i]).style.display = 'none';
        }

        function showDiv() {
        hideDivs(); //hide them all before we show the next one.
        var randomDiv = divs[Math.floor(Math.random()*divs.length)];
        var div = document.getElementById(randomDiv).style.display =
        'block';

        setTimeout(showDiv,500); //set a delay before showing the next div

        }

        showDiv(); // 로고랜덤 끝
    
    
    /* 종이들 드래그 */
      var draggable = $('.page'); //element 

draggable.on('mousedown', function(e){
	var dr = $(this).addClass("drag").css("cursor","move");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});//종이들 드래그 끝
    
    
   
 
    
}//웹사이즈 끝


    
    
})