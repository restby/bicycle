// @@include('_vendors.js');

/*burger & navigation*/
document.querySelector('.main-header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.main-header__burger').classList.toggle('active');
  document.querySelector('.main-header').classList.toggle('active');
  document.querySelector('.main-header__navigation').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});
$(function () {
  /*slick-slider */
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1169.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 839.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 479.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
