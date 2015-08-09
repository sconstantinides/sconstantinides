$(function() {
  $('.back').animate({width: 'toggle'}, 500);
  $('.breadcrumbs .current').addClass('gray');

  $('.thumb').click(function() {
    $(this).siblings().removeClass('current');
    $(this).addClass('current');

    $(this).siblings('.large').attr('src', $(this).attr('src'));
  });
});