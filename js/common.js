$(function(){
var isSP;
    $(window).on('load resize', function(){
        if ( window.innerWidth > 767 ) {
            isSP = false;
        } else if ( window.innerWidth < 768 ) {
            isSP = true;
        }
    });

    var classVal = $('article').attr('class');
    var classVals = classVal.split(' ');
    $('.g-nv ul li').each(function(){
        var dirName = $(this).find('a').attr('href');
        for (var i = 0; i < classVals.length; i++) {
            if (classVals[i] == 'index') {
                classVals[i] = 'home';
            }
            if (dirName == '/') {
                dirName = 'home';
            }
            if (dirName.match(classVals[i])) {
                $(this).addClass('active');
            }
        }
    });

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

