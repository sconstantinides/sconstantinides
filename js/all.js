$(function() {

    TweenLite.fromTo($('.logo'), 0.6, {
        y: 50,
        autoAlpha: 0
    }, {
        delay: 0.5,
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    });

    TweenLite.fromTo($('.logo .last'), 0.6, {
        x: -20,
        autoAlpha: 0
    }, {
        delay: 0.5,
        x: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    });

    // function setEmail() {
    //     var user = 'sconstantinides',
    //         domain = 'gmail.com';
    //     $('#email').attr('href', 'mailto:' + user + '@' + domain);
    // }

});
