$(function() {
  $('.container').scroll(function() {
    if($(this).scrollTop() < 50) {
      $(".container").css('background-color', '#A2DED0');
    } else {
      $(".container").css('background-color', '#68C3A3');
    }
  });
});