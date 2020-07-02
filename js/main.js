//change Navbar color on scroll
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>900);
   // $('nav li').toggleClass('nlscrolled', $(this).scrollTop()>100);
  });
//autoclose navbar on click
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
