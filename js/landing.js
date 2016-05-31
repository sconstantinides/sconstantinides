$(function() {
    transitionIn();
    setBackgroundListener();

    $('.portfolio-link').on('click', goToPortfolio);
});

function transitionIn() {

    TweenLite.to($('#landing'), 0.4, {
        delay: 0.1,
        backgroundColor: '#81CFE0',
        ease: Power2.easeOut,
        onComplete: function() {
            $('#landing').addClass('loaded');
        }
    });

    TweenLite.fromTo($('.logo'), 0.6, {
        y: 50
    }, {
        delay: 0.5,
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    });

    TweenLite.fromTo($('.logo .bottom'), 0.6, {
        x: -20,
    }, {
        delay: 0.5,
        x: 0,
        opacity: 1,
        ease: Power2.easeOut
    });

    TweenMax.staggerFromTo($('.social .link'), 0.6, {
        x: -20,
    }, {
        delay: 0.5,
        x: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, 0.05);
}

function setBackgroundListener() {

    var textColor = $('#landing').css('color'),
        colors = ['#68C3A3', '#EB974E', '#81CFE0'], // CSS starts at #81CFE0
        animating = false;

    $('#landing').on('mousemove', pickColor);

    function pickColor() {

        if (animating) return;
        animating = true;

        var newColor = colors.shift();
        colors.push(newColor);

        changeColor(newColor);

        setTimeout(function() {
            animating = false;
        }, 1000);
    }
}

function changeColor(newBackgroundColor) {

    var textColor = '#1F3A93';

    $('#landing').css('background-color', newBackgroundColor);
    $('.logo .top').css({
        textShadow: '-1px 1px 0px ' + newBackgroundColor + ', -2px 2px 0px ' + textColor + ', -3px 3px 0px ' + textColor + ', -4px 4px 0px ' + textColor + ', -5px 5px 0px ' + textColor + ', -6px 6px 0px ' + textColor + ', -7px 7px 0px ' + textColor + ', -8px 8px 0px ' + textColor + ', -9px 9px 0px ' + textColor + ', -10px 10px 0px ' + textColor
    });
}

function goToPortfolio() {

    $('#landing').off('mousemove').css('transition', 'background-color 0.6s');
    $('.logo .top').css('transition', 'text-shadow 0.6s');
    changeColor('#1F3A93');

    TweenLite.to($('#landing'), 0.6, {
        y: -window.innerHeight + 5,
        ease: Power2.easeInOut,
        onComplete: function() {
            window.location = '/portfolio.html';
        }
    });
}
