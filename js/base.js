$(function() {
    $(window).bind('pageshow', function(event) {
        if (event.originalEvent.persisted) window.location.reload();
    });

    $('.external-link').on('click', externalLink);
});

function externalLink(evt) {

    var href = $(evt.currentTarget).data('href');

    TweenLite.to($('body'), 0.6, {
        opacity: 0,
        y: window.innerHeight,
        ease: Power2.easeInOut,
        onComplete: function() {
            window.location = href;
        }
    });
}
