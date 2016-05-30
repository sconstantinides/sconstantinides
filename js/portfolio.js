$(function() {
    // transitionIn();
    setHeader();

    $('.thumb').on('click', swapImage);
    $('.landing-link').on('click', goToLanding);
});

// function transitionIn() {
//
// }

function setHeader() {

    var positions = [
            [[8, 6], [-8, -6]],
            [[-8, 6], [8, -6]],
            [[8, -6], [-8, 6]],
            [[-8, -6], [8, 6]]
        ],
        animating = false;

    $('#portfolio').on('mousemove', moveOutlines);

    function moveOutlines() {

        if (animating) return;
        animating = true;

        var newPos = positions.shift();
        positions.push(newPos);

        $('h1 .outline-1').css('transform', 'translate(' + newPos[0][0] + 'px, ' + newPos[0][1] + 'px' + ')');
        $('h1 .outline-2').css('transform', 'translate(' + newPos[1][0] + 'px, ' + newPos[1][1] + 'px' + ')');

        setTimeout(function() {
            animating = false;
        }, 1000);
    }
}

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
