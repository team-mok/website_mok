$(function(){

    var mql = window.matchMedia('screen and (min-width: 768px)');
    function checkBreakPoint(mql) {
        if (mql.matches) {
            $('.slick-list').not('.slick-initialized').slick({
                autoplay:true,
                autoplaySpeed:5000,
                centerMode:true,
                centerPadding: '15.7%',
                slidesToShow:3,
            });
        } else {
            $('.slick-list.slick-initialized').slick('unslick');
        }
    }

    mql.addListener(checkBreakPoint);
    checkBreakPoint(mql);


//アコーディオン、ハンバーガー
    $('.menu').on('click', function(){
        if ( $('header .menu').hasClass('pushed') == true ) {
            $('header .g-nv').removeClass('opened');
            $('header .g-nv').addClass('closed');
        } else {
            $('header .g-nv').addClass('opened');
            $('header .g-nv').removeClass('closed');
        }
        $('header .menu').toggleClass('pushed');
        $('.g-nv').slideToggle();
    });

  //スクロール→ヘッダーフェード
    var startPos = 0,winScrollTop = 0;
    var t = $('.main-visual').offset().top; 
    var p = t + $('.main-visual').height();
    $(window).on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            if(winScrollTop >= 200){
                $('header').fadeOut(700);;
            }
        } else {
            $('header').fadeIn(700);;
        }
    //スクロールメインビジュアルクラス
        if($(window).scrollTop() > p){
        	$('header').addClass('white'); 
      	}else{
        	$('header').removeClass('white'); 
      }

        startPos = winScrollTop;
    });

});

