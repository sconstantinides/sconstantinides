$(function() {

    TweenLite.fromTo($('.slide-1 .logo'), 0.6, {
        y: 50,
        autoAlpha: 0
    }, {
        delay: 0.1,
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    });

    TweenLite.fromTo($('.slide-1 .logo .last'), 0.6, {
        x: -20,
        autoAlpha: 0
    }, {
        delay: 0.1,
        x: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    });

    $(window).on('DOMMouseScroll mousewheel', $.throttle(5, scrollPage));

    var delta = 0,
        scrollThreshold = 30,
        currentSlide = 1,
        nextSlide = 0,
        slides = $('.slide'),
        numSlides = slides.length;

    function scrollPage(evt) {

    	if (evt.originalEvent.detail < 0 || evt.originalEvent.wheelDelta > 0) {

            if (delta > 0) delta = 0;
    		delta--;

    		if (Math.abs(delta) >= scrollThreshold) {

                if (currentSlide === 1) return;
                nextSlide = currentSlide - 1;

                showSlide();
    		}

    	} else {

            if (delta < 0) delta = 0;
    		delta++;

    		if (delta >= scrollThreshold) {

                if (currentSlide === numSlides) return;
                nextSlide = currentSlide + 1;

            	showSlide();
    		}
    	}
    }

    function showSlide() {

        $('.slide-' + currentSlide + ' .logo').removeClass('slide-up');
        setTimeout(function() {
            $('.slide-' + currentSlide + ' .logo').addClass('slide-down');
        }, 10);

        TweenLite.to($('.slide-' + currentSlide + ' .logo'), 0.3, {
            delay: 0.3,
            autoAlpha: 0,
            ease: Power2.easeOut,
            onComplete: function() {

                $('.slide-' + currentSlide).removeClass('active');
                $('.slide-' + nextSlide).addClass('active');

                $('.slide-' + nextSlide + ' .logo').removeClass('slide-down');
                setTimeout(function() {
                    $('.slide-' + nextSlide + ' .logo').addClass('slide-up');
                }, 10);

                TweenLite.fromTo($('.slide-' + nextSlide + ' .logo'), 0.3, {
                    y: 50,
                    autoAlpha: 0
                }, {
                    delay: 0.1,
                    y: 0,
                    autoAlpha: 1,
                    ease: Power2.easeOut
                });

                TweenLite.fromTo($('.slide-' + nextSlide + ' .logo .last'), 0.3, {
                    x: -20,
                    autoAlpha: 0
                }, {
                    delay: 0.1,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power2.easeOut
                });

                currentSlide = nextSlide;
                delta = 0;
            }
        });
    }
});
