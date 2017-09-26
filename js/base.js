$(function() {
  $(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) window.location.reload();
  });
});
