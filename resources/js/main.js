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

// $(window).scroll(function() {
//   var scrollTop = $(this).scrollTop();
//   if (scrollTop - 50 >= verticalScroll) {
//     var navBarHeight = $('.navbar').outerHeight();
//     $('.navbar').animate({
//       height: - navBarHeight
//     },150);
//   }
// });
