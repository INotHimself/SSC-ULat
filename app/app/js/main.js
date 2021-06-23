// slaider par
$('.intro__slaider').slick({
    autoplay: 'autoplay',
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    pauseOnHover: true,
    swipe: true,
    touchMove: true,
    
});
  
$('.header__burger').on('click', () => {
    $('.header__burger,.header__nav,.shadow').toggleClass('active');
    $('body').toggleClass('lock')
});

$('.shadow').on('click', () =>{
    $('.header__burger,.header__nav,.shadow').removeClass('active');
});

// scroll

$(() => {
    
    $('.gotop').on( 'click', () => {
      $("html, body").animate({
        scrollTop:0
      }, 0);
    })
})
$(window).on('scroll', () => {

    if ($(this).scrollTop()>500) {
        
        $('.gotop').fadeIn();
    }

    else {
        $('.gotop').fadeOut();
    }
});
