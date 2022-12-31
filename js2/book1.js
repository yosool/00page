$(document).ready(function(){
    
    
   var windowWidth = $( window ).width();
if(windowWidth < 768) {
    //모바일사이즈
    
     
        
    
    
    
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
    
    
    /* 새로고침마다 각도 랜덤하게하기 */
    $("#pro_main>div").each( function() {
  var rNum = (Math.random()*4)-2;  
  $(this).css( {   
    '-webkit-transform': 'rotate('+rNum+'2deg)',
    '-moz-transform': 'rotate('+rNum+'2deg)'  
  } );  
} );//각도랜덤 끝
        
        
        /* 종이에 마우스올리면 앞으로 가져오기 */
        $('#pro_main>div').mouseover(function(){
            $(this).css({
                'z-index': '100'
            })
            $(this).siblings('div').css({
                'z-index': 0
            })
        })//종이 앞으로 끝
        
        
    
    
        /* 가로스크롤 퍼센티지 구하기 */
    $('#pro_main>div>span').scroll(function(){
    var windowWidth = $(window).width() * 0.05;
    var $this = $(this),
        scrollPercentage = 100 * $this.scrollLeft() / ($this.find('i:nth-child(2)').width() + $this.find('i:nth-child(1)').width() + windowWidth - $this.width());
        console.log(scrollPercentage)
        
            /* main 스크롤하면 가로스크롤 차게하기 */
            $this.siblings('.bar_long').css('width', scrollPercentage +"%"  );
        
    });
    
    
    
        
        /* 마우스휠로 가로스크롤하기 */
        $("#pro_main>div>span").on('mousewheel',function(e){

            var wheelDelta = e.originalEvent.wheelDelta;

            if(wheelDelta > 0){

                //console.log("up");

                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

            }else{

            //console.log("down");

                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

		}

    }); //마우스휠로 가로스크롤 끝
    
    
    /* 멤버별 색깔 마우스만 나오게하기 */
    $('#pro_main>div.kim').mouseover(function(){
        $('#bee').css({
            'background-color': '#fc615d',
            'display': 'block'
        })
    })
    $('#pro_main>div.park').mouseover(function(){
        $('#bee').css({
            'background-color': '#fdbc40',
            'display': 'block'
        })
    })
    $('#pro_main>div.jeong').mouseover(function(){
        $('#bee').css({
            'background-color': '#34c749',
            'display': 'block'
        })
    })
    $('#pro_main>div.lee').mouseover(function(){
        $('#bee').css({
            'background-color': '#4397fb',
            'display': 'block'
        })
    })
    $('#pro_main>div').mouseout(function(){
        $('#bee').css({
            'display': 'none'
        })
    })
    
    
    
    
}


    
    
})