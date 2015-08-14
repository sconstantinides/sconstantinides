$(function() {
  window.onunload = function(){}; // fixes back button issue in Safari
  setEmail(); // see you in hell bots

  $('.primary-link').click(function(event) {
    event.preventDefault();

    var href = $(this).attr('href');
    window.setTimeout(function() {
      redirect(href);
    }, 600);

    expandButton($(this));
  });
});

function setEmail() {
  var user = 'sconstantinides';
  var domain = 'gmail.com';
  $('#email').attr('href', 'mailto:' + user + '@' + domain);
}

function redirect(href) {
  window.location = href;
}

function expandButton(target) {
  target.css('left', target.offset().left);
  target.css('top', target.offset().top);
  target.addClass('active');
  target.animate({ width: '100%', height: $(document).height(), left: 0, top: 0 }, 500);
}
