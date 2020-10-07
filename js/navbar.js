var image1 = $('#image-1')
var image2 = $('#image-2')
var $sectionOne = $(".section-hero");
var $navbar = $(".main-nav");
var $sectionThree = $(".section-landscape");
var $sectionTwo = $(".section-why");
var $footer = $(".devtron-footer");
var $devtronLandscape = $(".devtron-landscape");
var $paraContainer = $(".section-hero__paragraph-container");


$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: false,
  margin: 12,
  stagePadding: 20,
  items: 1,
})

$('sneakpeek-mob').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: false,
  margin: 12,
  stagePadding: 0,
  items: 1,
})

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(function () {

  $('.section-hero__paragraph:nth-child(1)').on("animationend", function (self) {
    
    // $paraContainer.remove();

  });

  //Transiton from current to Devtron Landscape
  if ($sectionThree.isInViewport()) {
    $(image1).addClass('fixed-pos');
    if ($devtronLandscape.isInViewport()) {
      $(image2).removeClass('fixed-pos');
    }
    else {
      $(image2).addClass('fixed-pos');
    }
  }

  $(document).scroll(function () {
    //Navbar 
    if ($(this).scrollTop() > $navbar.height()) {
      $navbar.addClass("main-nav-dark");
      $navbar.removeClass("main-nav-light");
    }
    if ($(this).scrollTop() > ($sectionOne.height() + 2 * $navbar.height())) {
      $navbar.removeClass("main-nav-dark");
      $navbar.addClass("main-nav-light");
      $(image1).removeClass('fixed-pos');
      $(image2).removeClass('fixed-pos');
    }

    //Transiton from current to Devtron Landscape
    if ($sectionThree.isInViewport()) {
      $(image1).addClass('fixed-pos');
      if ($devtronLandscape.isInViewport()) {
        $(image2).removeClass('fixed-pos');
      }
      else {
        $(image2).addClass('fixed-pos');
      }
    }

    if ($(this).scrollTop() > ($sectionOne.height() + $sectionTwo.height() + (5 * $navbar.height()))) {
      $navbar.addClass("main-nav-dark");
      $navbar.removeClass("main-nav-light bg-white");
      $(image1).removeClass('fixed-pos');
      $(image2).removeClass('fixed-pos');
    }

    if ($(this).scrollTop() > ($sectionOne.height() + $sectionTwo.height() + $sectionThree.height() + (7 * $navbar.height()))) {
      $navbar.removeClass("main-nav-dark");
      $navbar.addClass("main-nav-light bg-white");
    }

    //footer 
    var viewportOffset = $(".devtron-footer").get(0).getBoundingClientRect();
    if (viewportOffset.top < 80) {
      $navbar.addClass("main-nav-dark");
      $navbar.removeClass("main-nav-light bg-white");
    }
  });
});