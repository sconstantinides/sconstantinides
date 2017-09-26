$(function() {
  transitionIn();

  $('.portfolio-link').on('click', goToPortfolio);
  $('.external-link').on('click', externalLink);
});

function transitionIn() {

  TweenLite.to($('#landing'), 0.4, {
    delay: 0.1,
    backgroundColor: '#81CFE0',
    ease: Power2.easeOut,
    onComplete: function() {
      $('#landing').addClass('loaded');
      setEmail();
      setBackgroundListener();
    }
  });

  TweenLite.fromTo($('.logo__top'), 0.8, {
    y: 40
  }, {
    y: 0,
    delay: 0.3,
    opacity: 1,
    ease: Power2.easeOut
  });

  TweenLite.fromTo($('.logo__bottom'), 0.6, {
    y: 30
  }, {
    y: 0,
    delay: 0.5,
    opacity: 1,
    ease: Power2.easeOut
  });

  TweenMax.staggerFromTo($('.social__link'), 0.8, {
    y: 20,
  }, {
    delay: 0.7,
    y: 0,
    opacity: 1,
    ease: Power2.easeOut
  }, 0.03);
}

function setEmail() {
  var user = 'sconstantinides';
  var domain = 'gmail.com';

  $('#email').attr('href', 'mailto:' + user + '@' + domain);
}

function setBackgroundListener() {
  var textColor = $('#landing').css('color');
  var colors = ['#68C3A3', '#EB974E', '#81CFE0']; // starts at #81CFE0
  var animating = false;

  $('#landing').on('mousemove', function() {
    if (animating) return;
    animating = true;

    var newColor = colors.shift();
    colors.push(newColor);

    changeColor(newColor);

    setTimeout(function() {
      animating = false;
    }, 1000);
  });
}

function changeColor(newBackgroundColor) {
  var textColor = '#1F3A93';

  $('#landing').css('background-color', newBackgroundColor);
  $('.logo__top').css({
    textShadow: '-1px 1px 0px ' + newBackgroundColor + ', -2px 2px 0px ' + textColor + ', -3px 3px 0px ' + textColor + ', -4px 4px 0px ' + textColor + ', -5px 5px 0px ' + textColor + ', -6px 6px 0px ' + textColor + ', -7px 7px 0px ' + textColor + ', -8px 8px 0px ' + textColor + ', -9px 9px 0px ' + textColor + ', -10px 10px 0px ' + textColor
  });
}

function goToPortfolio(evt) {
  evt.preventDefault();
  var href = $(evt.currentTarget).attr('href');

  $('#landing').off('mousemove').css('transition', 'background-color 0.6s');
  $('.logo__top').css('transition', 'text-shadow 0.6s');
  changeColor('#1F3A93');

  TweenLite.to($('#landing'), 0.6, {
    y: -window.innerHeight + 5,
    ease: Power2.easeInOut,
    onComplete: function() {
      window.location = href;
    }
  });
}

function externalLink(evt) {
  evt.preventDefault();
  var href = $(evt.currentTarget).attr('href');

  TweenLite.to($('#landing'), 0.5, {
    opacity: 0,
    y: window.innerHeight,
    ease: Power2.easeInOut,
    onComplete: function() {
      window.location = href;
    }
  });
}
