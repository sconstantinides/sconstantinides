$(function() {
  $(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) window.location.reload();
  });

  $('.transitionLink').on('click', transitionLink);
});

function transitionLink(evt) {
  evt.preventDefault();
  var href = $(evt.currentTarget).attr('href');

  TweenLite.to($('body > article'), 0.5, {
    opacity: 0,
    y: window.innerHeight,
    ease: Power2.easeInOut,
    onComplete: function() {
      window.location = href;
    }
  });
}
