$(function() {
    transitionIn();

    $('.thumb').on('click', swapImage);
    $('.landing-link').on('click', goToLanding);
});

function transitionIn() {
    TweenLite.fromTo($('.content'), 0.6, {
        y: 50
    }, {
        delay: 0.1,
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
        onComplete: function() {

            moveOutlines([[8, 6], [-8, -6]]);

            setTimeout(function() {
                setHeaderListener();
            }, 1000);
        }
    });

    TweenLite.to($('.landing-link'), 0.6, {
        delay: 0.1,
        opacity: 1,
        ease: Power2.easeOut
    });
}

function setHeaderListener() {

    var positions = [
            [[-8, 6], [8, -6]],
            [[8, -6], [-8, 6]],
            [[-8, -6], [8, 6]],
            [[8, 6], [-8, -6]]
        ],
        animating = false;

    $('#portfolio').on('mousemove', pickLocation);

    function pickLocation() {

        if (animating) return;
        animating = true;

        var newPos = positions.shift();
        positions.push(newPos);

        moveOutlines(newPos);

        setTimeout(function() {
            animating = false;
        }, 1000);
    }
}

function moveOutlines(newPos) {

    $('h1 .outline-1').css('transform', 'translate(' + newPos[0][0] + 'px, ' + newPos[0][1] + 'px' + ')');
    $('h1 .outline-2').css('transform', 'translate(' + newPos[1][0] + 'px, ' + newPos[1][1] + 'px' + ')');
}

function swapImage(evt) {

    var target = $(evt.currentTarget),
        image = target.css('background-image').slice(5, -2), // remove "url('" and "')"
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
