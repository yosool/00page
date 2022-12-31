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
    
    
        
    /* paper 클릭했을 시 */
    $('#paper').click(function(){
        
        
        $(this).removeClass()
        
        $('#paper_bg').css('display','none')
        
        
        
        
        /* paper 위로 올려보내기 */
        $(this).addClass('animated bounceOutUp')
        
        
      
    /* 책 오른쪽에서부터 나오게하기 */ 
    $('#main #box>div').addClass('fadeInRightBig animated_firb opacity')
            
            
    
        
    })// paper 클릭했을때 끝
    
    
    
    /* 책 클릭하면  */
    $('#main #box>div').click(function(){
        
        /* 주제 보이게하기 */
        var ind = $(this).index();
        var book =  $('#main #book>div').eq(ind)
        //console.log(ind)
        book.css('opacity','1')
        book.siblings().css('opacity','0')//다른 주제들은 지우기
        
       /* 다른책들 오퍼시티 낮추기 */ $(this).siblings('div').children('a').css('opacity','0.3')
        $(this).siblings('div').find('i').css('opacity','0.3')
        $(this).children('a').css('opacity','1')
        $(this).find('i').css('opacity','1')
        
        
        
        /* 다른 주제들 밑줄은 지우기 */
        book.siblings().find('span').removeClass('width')
        /* 밑줄 나오게하기 */
        book.find('span').addClass('width')
        
        
    })// 책 클릭하면 끝

        
    
    
    
} else {
    //웹사이즈
    
    
    $('#paper').mouseover(function(){
        $('#bee').css('display', 'none')
        $('#bee2').css('display', 'none')
        $('#bee3').css('display', 'none')
    })
    
    
    $('#paper_bg').mouseover(function(){
        $('#bee').css('display', 'none')
        $('#bee2').css('display', 'none')
        $('#bee3').css('display', 'none')
    })
    
    $('#header').mouseover(function(){
        $('#bee').css('display','block')
        $('#bee2').css('display','block')
        $('#bee3').css('display','block')
    })
    
    $('#main').mouseover(function(){
        $('#bee').css('display','block')
        $('#bee2').css('display','block')
        $('#bee3').css('display','block')
    })
    
    
    /* 가로스크롤 퍼센티지 구하기 */
    $('#main').scroll(function(){
    var $this = $(this),
        scrollPercentage = 100 * $this.scrollLeft() / ($('#bg').width()-$this.width());
        //console.log(scrollPercentage)
        
            /* main 스크롤하면 가로스크롤 차게하기 */
            $('.bar_long').css('width', scrollPercentage +"%"  );
        
    });
    
    
    
    /* main 마우스휠로 가로스크롤하기 */
        $("#main").on('mousewheel',function(e){

            var wheelDelta = e.originalEvent.wheelDelta;

            if(wheelDelta > 0){

                //console.log("up");

                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

            }else{

            //console.log("down");

                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

		}

    }); //마우스휠로 가로스크롤 끝
    
    
    /* page13 클릭했을 시 */
    $('#page13').click(function(){
        
        
        $('#paper').removeClass()
        
        $('#paper_bg').css('display','none')
        
        
        
        
        /* paper 없애기 */
        $('#paper').delay(500).fadeOut();
        
        
        /* page 치워버리기 */
        $(this).addClass('clickme')
        
        /* page 치울때 랜덤으로 각도돌리기 */
        $(".page").each( function() {
  var rNum = (Math.random()*120)-10;  
  $(this).css( {   
    '-webkit-transform': 'rotate('+rNum+'50deg)',
    '-moz-transform': 'rotate('+rNum+'50deg)'  
  } );  
} );
        
      
    /* 책 오른쪽에서부터 나오게하기 */ 
    $('#main #box>div').addClass('fadeInRightBig animated_firb opacity')
       
        
        
    })//paper 스크롤했을때 끝
    
    
    
    
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
    
    
    
    /* 책에 마우스 올리면 뒤에 제목 보이게하기 */
    $('#main #box>div').mouseover(function(){
        var ind = $(this).index();
        //console.log(ind)
        $('#main #book>div').eq(ind).css('opacity','1')
        
         /* 다른책들 오퍼시티 낮추기 */
        $(this).siblings('div').children('a').css('opacity','0.7')
        $(this).siblings('div').find('i').css('opacity','0.7')
        $(this).children('a').css('opacity','1')
        $(this).find('i').css('opacity','1')
        
        
    })
    /* 책에서 마우스 내리면 제목 없애기 */
    $('#main #box>div').mouseout(function(){
        var ind = $(this).index();
        //console.log(ind)
        $('#main #book>div').eq(ind).css('opacity','0')
        
        
       /* 책들 오퍼시티 다시 높이기 */ $(this).siblings('div').children('a').css('opacity','1')
        $(this).siblings('div').find('i').css('opacity','1')
        $(this).children('a').css('opacity','1')
        $(this).find('i').css('opacity','1')
        
        
        
    })// mouseover, mouseout 이펙트 끝
    
    
    
    
    /* 명함들 랜덤포지션 */    
    for (var i = 0; i < 3; i++) {
  $('.namecardP').append('<div class="namecard"></div>');
}
$( '.namecard' ).each(function( index ) {
  $(this).css({
    left : ((Math.random() * $('.namecardP').width()-100)),
    top : ((Math.random() * $('.namecardP').height()-100))
  });
});//명함 랜덤포지션 끝
    
    
    
    /* 명함들 랜덤 로테이트 */
            $(".namecard").each( function() {
  var rNum = (Math.random()*30)-10;  
  $(this).css( {   
    '-webkit-transform': 'rotate('+rNum+'50deg)',
    '-moz-transform': 'rotate('+rNum+'50deg)'  
  } );  
} );//랜덤로테이트 끝
    
    
    /* 명함 나오게하기 */
    $('#nav>a').click(function(){
        $('.namecardP').css({
            display: 'block'
        })
    })
    
    /* 명함 끄기 */
    $('.namecardP>i').click(function(){
        $('.namecardP').css({
            display: 'none'
        })
    })
    
    
    
    
}//웹사이즈 끝


    
    
})