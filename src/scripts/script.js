wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100
  }
);

$(document).ready(function(){
  $('.btn-menu-mobile').click(function() {
    $('.btn-menu-mobile').toggleClass('active');
    $('.header-content').toggleClass('active');
    $('html, body').toggleClass('active');
  })
  // add min height for content
  let FH = $('.footer-container').height();
  $('.main-container').css({"min-height": 'calc(100vh - '+ FH + 'px)'});
  $('.scroll-down').click(function() {
    $('html, body').animate({
        scrollTop: 1000
      }, 1000)
  })
})

$(window).resize(function() {
  let FH = $('.footer-container').height();
  console.log(FH);
  $('.main-container').css({"min-height": 'calc(100vh - '+ FH + 'px)'});
})

$(window).on('load', function() {
  $("html, body").removeClass('loading');
  $(".loader").addClass('loaded');
  wow.init();
});