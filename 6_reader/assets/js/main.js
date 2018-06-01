$(document).ready(function() {


  $('.r-disp').mouseenter(function() {
     $('.p-disp').addClass('p-show');
   });

 $('.r-disp').mouseleave(function() {
     $('.p-disp').removeClass('p-show');
   });


///////////////////////////

  $('.click1').click(function(){
    $('.show1').show();
    $('.clicks2').show();
  });

  $('.click2').click(function(){
    $('.show2').show();
    $('.clicks3').show();
  });

  $('.click3').click(function(){
    $('.show3').show();
    $('.clicks4').show();
  });

  $('.click4').click(function(){
    $('.show4').show();
    $('.clicks5').show();
  });

  $('.click5').click(function(){
    $('.show5').show();
    $('.clicks6').show();
  });

  $('.click6').click(function(){
    $('.show6').show();
    $('.clicks7').show();
  });

  $('.click7').click(function(){
    $('.show7').show();
    $('.clicks8').show();
  });

  $('.click8').click(function(){
    $('.show8').show();
    $('.clicks9').show();
  });

  $('.click9').click(function(){
    $('.show9').show();
    $('.clicks10').show();
  });

  $('.click10').click(function(){
    $('.show10').show();
    $('.scroll').show();
  });

  $('.circle').click(function(){
    $('.clicks2').hide();
    $('.clicks3').hide();
    $('.clicks4').hide();
    $('.clicks5').hide();
    $('.clicks6').hide();
    $('.clicks7').hide();
    $('.clicks8').hide();
    $('.clicks9').hide();
    $('.clicks10').hide();
    $('.show1').hide();
    $('.show2').hide();
    $('.show3').hide();
    $('.show4').hide();
    $('.show5').hide();
    $('.show6').hide();
    $('.show7').hide();
    $('.show8').hide();
    $('.show9').hide();
    $('.show10').hide();
    $('.scroll').hide();
  });


  ////////////////////////////////////

  $('.r-fragment').mouseenter(function() {
   $('.p-fragment').addClass('p-show');
 });

$('.r-fragment').mouseleave(function() {
   $('.p-fragment').removeClass('p-show');
 });



  $('.sample').addClass('classname');
  $('.sample').removeClass('classname');

});
