(function($) {
    
    $('body').scrollspy({ target: '.scrollspy' });
    
    // GNB, 인디케이터 클릭
    $(document).on('click', '#indicator > .nav > li > a, #gnb > .nav > li > a', function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        console.log( $(hash).offset() );
        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top
        }, 500, 'swing');
    });
    
    // 로고 클릭
    $(document).on('click', '#header .logo > a', function(e) {
        e.preventDefault();
        $('body').stop().animate({
            scrollTop: 0
        }, 500, 'swing');
    });
    
    // 마우스휠 반응
    /*
    $(window).on('mousewheel', function(event) {
        if (event.deltaY === -1) {
            $('#indicator').find('.active').next().find('a').trigger('click');
        }
        if (event.deltaY === 1) {
            $('#indicator').find('.active').prev().find('a').trigger('click');
        }
    });
    */
    
    // 네비게이션 fixed
    $(window).on('scroll', function(event) {
        //console.log( $(this).scrollTop(), $('body').height() );
        if ( $(this).scrollTop() < $('body').height() ) {
            $('body').removeClass('nav-fixed');
        } else {
            $('body').addClass('nav-fixed');
        }
    });
    
    // 사업영역 슬라이드
    var $departSlider = $('#departs > div').bxSlider({
        mode: 'fade',
        auto: false,
        pager: false,
        controls: false,
        adaptiveHeight: true,
        preventDefaultSwipeX: true
    });
    $(document).on('click', '#departs .btn-prev', function() {
        $departSlider.goToPrevSlide();
    });
    $(document).on('click', '#departs .btn-next', function() {
        $departSlider.goToNextSlide();
    });
    
})(jQuery);