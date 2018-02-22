$(function() {
  transitionIn();

  $('.thumb').on('click', swapImage);
  $('.link--back').on('click', goToLanding);
});

function transitionIn() {
  TweenLite.fromTo($('.content'), 0.6, {
    y: 60
  }, {
    delay: 0.3,
    y: 0,
    opacity: 1,
    ease: Power2.easeOut
  });

  setTimeout(function() {
    moveOutlines([
      [8, 6],
      [-8, -6]
    ]);
  }, 700);

  TweenLite.to($('.link--back'), 0.6, {
    delay: 0.3,
    opacity: 1,
    ease: Power2.easeOut
  });
}

function moveOutlines(newPos) {
  $('.header__outline--1').css('transform', 'translate(' + newPos[0][0] + 'px, ' + newPos[0][1] + 'px' + ')');
  $('.header__outline--2').css('transform', 'translate(' + newPos[1][0] + 'px, ' + newPos[1][1] + 'px' + ')');
}

function swapImage(evt) {
  var target = $(evt.currentTarget);
  var image = target.css('background-image');
  var caption = target.siblings('.caption');

  target.addClass('thumb--current').siblings().removeClass('thumb--current');
  target.siblings('.large').css('background-image', image);

  caption.find('.number').text(target.index() + 1);
  caption.find('.description').text(target.data('description'));
}

function goToLanding(evt) {
  evt.preventDefault();
  var href = $(evt.currentTarget).attr('href');

  TweenLite.to($('body'), 0.1, {
    opacity: 0,
    ease: Power2.easeOut,
    onComplete: function() {
      window.location = href;
    }
  });
}
