$(function() {
  window.setTimeout(function() {
    animateBreadcrumbs();
  }, 500);

  $('.thumb').click(function() {
    var image_str = $(this).css('background-image');
    var image = image_str.substr(4, image_str.length - 5);

    $(this).addClass('current').siblings().removeClass('current');
    $(this).siblings('.large').css({
      opacity: 0,
      'max-width': $(this).css('max-width')
    }).attr('src', image).animate({opacity: 1}, 200);

    var caption = $(this).siblings('.caption');
    caption.find('.number').text($(this).index() + 1);
    caption.find('.description').text($(this).attr('alt'));
  });
});

function animateBreadcrumbs() {
  $('.back').animate({width: 'toggle'}, 500);
  $('.breadcrumbs .current').addClass('gray');
}