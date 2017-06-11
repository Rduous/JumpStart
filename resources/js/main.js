$(document).ready(function() {

  // Carousel logic
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  // Navbar/scroll behavior
  var verticalScroll = 0;

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - 50 > verticalScroll) {
      var navBarHeight = $('.navbar').css('height');
      $('.navbar').animate({
        top: '-' + navBarHeight
      }, 150);
    } else if (verticalScroll - 50 > scrollTop) {
      $('.navbar').animate({
        top: 0
      }, 150);
    }
    verticalScroll = scrollTop;
  });

});
