$(function() {
    $('.external-link').on('click', externalLink);
});

function externalLink(evt) {

    var href = $(evt.currentTarget).data('href');

    TweenLite.to($('body'), 0.6, {
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function() {
            window.location = href;
        }
    });
}
