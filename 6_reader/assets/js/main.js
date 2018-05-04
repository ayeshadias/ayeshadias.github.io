$(document).ready(function() {


// Add jQuery here

$('.b-reset').click(function(){

  $('.item').addClass('show');
  $('.item').removeClass('hide');
  $('.item').removeClass('large');


});

$('.b-next').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.beatles').addClass('show large');
  $('.item.beatles').removeClass('hide ');

});


  $('.sample').addClass('classname');
  $('.sample').removeClass('classname');



});
