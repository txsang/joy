$(window).ready(function(){
  $(".btn-menu-mobile").click(function() {
    $(".btn-menu-mobile").toggleClass("active");
    $(".header-content").toggleClass("active");
    $("html, body").toggleClass("active");
  });
  // add min height for content
  var FH = $(".footer-container").height();
  $(".main-container").css({"min-height": "calc(100vh - "+ FH + "px)"});
  $(".scroll-down").click(function() {
    $("html, body").animate({
        scrollTop: 1000
      }, 1000);
  });
})

$(window).resize(function() {
  var FH = $(".footer-container").height();
  $(".main-container").css({"min-height": "calc(100vh - "+ FH + "px)"});
})

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 100) {
    $(".background-header-mobile").css({"opacity": 1});
  } else {
    $(".background-header-mobile").css({"opacity": scrollTop / 100});
  }
})

$(window).on("load", function() {
  $("html, body").removeClass("loading");
  $(".loader").addClass("loaded");
  var wow = new WOW({ animateClass: "animated", offset: 100 });
  wow.init();
});