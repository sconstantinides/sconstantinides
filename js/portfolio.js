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
      moveOutlines([
        [8, 6],
        [-8, -6]
      ]);
    }
  });

  TweenLite.to($('.landing-link'), 0.6, {
    delay: 0.1,
    opacity: 1,
    ease: Power2.easeOut
  });
}

function moveOutlines(newPos) {
  $('.headerOutline--1').css('transform', 'translate(' + newPos[0][0] + 'px, ' + newPos[0][1] + 'px' + ')');
  $('.headerOutline--2').css('transform', 'translate(' + newPos[1][0] + 'px, ' + newPos[1][1] + 'px' + ')');
}

function swapImage(evt) {
  var target = $(evt.currentTarget);
  var image = target.css('background-image').replace('url(', '').replace(')', '').replace(/["|']/g, '');
  var caption = target.siblings('.caption');

  target.addClass('current').siblings().removeClass('current');
  target.siblings('.large').css('max-width', target.css('max-width')).attr('src', image);

  caption.find('.number').text(target.index() + 1);
  caption.find('.description').text(target.attr('alt'));
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
