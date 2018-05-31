$(document).ready(function() {


  $('.r-disp').mouseenter(function() {
     $('.p-disp').addClass('p-show');
   });

 $('.r-disp').mouseleave(function() {
     $('.p-disp').removeClass('p-show');
   });


//////////////////////////

  $('.click1').click(function(){
    $('.show1').show();
  });

  $('.click2').click(function(){
    $('.show2').show();
  });

  $('.click3').click(function(){
    $('.show3').show();
  });

  $('.click4').click(function(){
    $('.show4').show();
  });

  $('.click5').click(function(){
    $('.show5').show();
  });

  $('.click6').click(function(){
    $('.show6').show();
  });

  $('.click7').click(function(){
    $('.show7').show();
  });



  $('.sample').addClass('classname');
  $('.sample').removeClass('classname');

});
