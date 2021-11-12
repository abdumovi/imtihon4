$(document).ready(function(){
  $('.products__elements').slick({
    arrows:true,
    dots:false,
    speed: 300,
    adaptiveHeight:true,
    slidesToShow:4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.partnores__list').slick({
    arrows:false,
    dots:false,
    speed: 300,
    autoplay:true,
    adaptiveHeight:true,
    slidesToShow:6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
        }
      }
    ]
  });
});


