$(function() {
  animateBreadcrumbs();

  $('.thumb').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
    $(this).siblings('.large').css('opacity', 0).attr('src', $(this).attr('src')).animate({opacity: 1}, 300);

    var caption = $(this).siblings('.caption');
    caption.find('.number').text($(this).index() + 1);
    caption.find('.description').text($(this).attr('alt'));
  });
});

function animateBreadcrumbs() {
  $('.back').animate({width: 'toggle'}, 500);
  $('.breadcrumbs .current').addClass('gray');
}