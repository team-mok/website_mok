$(function(){

    var mql = window.matchMedia('screen and (min-width: 768px)');
    function checkBreakPoint(mql) {
        if (mql.matches) {
            $('.slick-list').not('.slick-initialized').slick({
                autoplay:true,
                autoplaySpeed:0,
                centerMode:true,
                centerPadding: '15.7%',
                cssEase: 'linear',
                slidesToShow:3,
                speed: 10000,
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
            $('.arrowWrap').addClass('active'); 
      	}else{
        	$('header').removeClass('white'); 
            $('.arrowWrap').removeClass('active'); 
      }

        startPos = winScrollTop;


        if (mql.matches) {
            var ciPos = $(".what-we-do").offset().top,
                cih = $(".what-we-do").height(),
                st = $(window).scrollTop(),
                wh = window.innerHeight,
                cu = (1 - (ciPos  - st ) / wh),
                cscroll = winScrollTop - ciPos,
                cuv = (cu * cscroll) / 5,
                cur = Math.floor( cuv * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
            if (cur >= 50) {
                cur = 50;
            }
            if ( st > ciPos ) {
                $("#cia1").css({transform: 'translateY(' + (cur) + '%)'});
                $("#cia2").css({transform: 'translateY(' + '-' + (cur) + '%)'});
                console.log(cur);
            }  else if (st < ciPos) {
                cur = 0;
                $("#cia1").css({transform: 'translateY(' + (cur) + '%)'});
                $("#cia2").css({transform: 'translateY(' + '-' + (cur) + '%)'});
                console.log(cur);
            }
        }

    });

    //topに戻る
    var pagetop = $('.topInner');
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });


});

