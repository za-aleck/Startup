  $('.burger').click(function() {
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.header__logo').toggleClass('active');
        // скрол страницы пропадает
        $('body').toggleClass('lock');
 });  
    $("body").on('click', '[href*="#"]', function(e){
   var fixed_offset = 55;
   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
    
         $('.menu').removeClass('active');
         $('body').removeClass('lock');
         $('.burger').removeClass('active');
         $('.header__logo').removeClass('active');


   var $this = $(this);

        $(".menu a").removeClass("active");
       $this.addClass("active");

  });











$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  waitForAnimate:false,
  arrows:true, 
  prevArrow:'<button class="arrow left"><i class="angle fa-solid fa-angle-left"></i></button>',
  nextArrow:'<button class="arrow right"><i class="angle fa-solid fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,  
  waitForAnimate:false,
  arrows:false, 
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
   
  // ]
});
