$(document).ready(function() {


// Add jQuery here

$('.b-reset').click(function(){

  $('.item').addClass('show');
  $('.item').removeClass('hide');


  });

$('.b-red').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.red').addClass('show');
  $('.item.red').addClass('col3of4');
  $('.item.red').removeClass('hide');

  });


$('.b-blue').click(function(){

  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.blue').addClass('show');
  $('.item.blue').removeClass('hide');

  });


  $('.sample').addClass('classname');
  $('.sample').removeClass('classname');



  });
