$(document).ready(function() {


  $('.r-disp').mouseenter(function() {
     $('.p-disp').addClass('p-show');
   });

 $('.r-disp').mouseleave(function() {
     $('.p-disp').removeClass('p-show');
   });

  $('.sample').addClass('classname');
  $('.sample').removeClass('classname');



});
