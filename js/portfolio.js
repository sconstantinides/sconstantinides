$(function() {
    // transitionIn();

    $('.thumb').on('click', swapImage);
    $('.landing-link').on('click', goToLanding);
});

// function transitionIn() {
//
// }

function swapImage(evt) {

    var target = $(evt.currentTarget),
        image = target.data('image-url'),
        caption = target.siblings('.caption');

    target.addClass('current').siblings().removeClass('current');
    target.siblings('.large').css('max-width', target.css('max-width')).attr('src', image);

    caption.find('.number').text(target.index() + 1);
    caption.find('.description').text(target.attr('alt'));
}

function goToLanding() {

    TweenLite.to($('body'), 0.6, {
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function() {
            window.location = '/';
        }
    });
}
