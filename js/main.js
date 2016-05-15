$(function() {

    TweenLite.fromTo($('.logo'), 0.6, {
        y: 50
    }, {
        delay: 0.1,
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    });

    TweenLite.fromTo($('.logo .bottom'), 0.6, {
        x: -20,
    }, {
        delay: 0.1,
        x: 0,
        opacity: 1,
        ease: Power2.easeOut
    });

    var textColor = $('body').css('color'),
        colors = ['lightblue', 'lightseagreen', 'lightcoral'],
        newBackgroundColor,
        animating = false;

    $('body').on('mousemove', changeColor);

    function changeColor() {

        if (animating) return;
        animating = true;

        newBackgroundColor = colors.shift();
        colors.push(newBackgroundColor);

        $('body').css('background-color', newBackgroundColor);
        $('.logo .top').css({
            textShadow: '-1px 1px 0px ' + newBackgroundColor + ', -2px 2px 0px ' + textColor + ', -3px 3px 0px ' + textColor + ', -4px 4px 0px ' + textColor + ', -5px 5px 0px ' + textColor + ', -6px 6px 0px ' + textColor + ', -7px 7px 0px ' + textColor + ', -8px 8px 0px ' + textColor + ', -9px 9px 0px ' + textColor + ', -10px 10px 0px ' + textColor
        });

        setTimeout(function() {
            animating = false;
        }, 1000)
    }
});
