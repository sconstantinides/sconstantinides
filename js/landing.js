$(function() {
  setEmail();

  $('.primary-link').click(function(event) {
    event.preventDefault();

    var href = $(this).attr('href');
    window.setTimeout(function() {
      redirect(href);
    }, 500);

    expandButton($(this));
  });

  $('.social-link').hover(function() {
    $(this).find('.text').animate({width: 'toggle'}, 300);
  });
});

function setEmail() {
  var user = 'sconstantinides';
  var domain = 'gmail.com';
  $('#email').attr('href', 'mailto:' + user + '@' + domain);
}

function expandButton(target) {
  target.attr('href', '');
  target.css('left', target.offset().left);
  target.css('top', target.offset().top);
  target.addClass('active');
  target.animate({ width: '100%', height: $(document).height(), left: 0, top: 0 });
}

function redirect(href) {
  window.location = href;
}