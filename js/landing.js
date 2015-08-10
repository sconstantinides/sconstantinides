$(function() {
  $('.primary-link').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');

    window.setTimeout(function() {
      redirect(href);
    }, 500);

    $(this).attr('href', '');
    $(this).css('left', $(this).offset().left);
    $(this).css('top', $(this).offset().top);
    $(this).addClass('active');
    $(this).animate({ width: '100%', height: $(document).height(), left: 0, top: 0 });
  });
});

function redirect(href) {
  window.location = href;
}

function email() {
  alert('Get in touch: sconstantinides [at] gmail [dot] com');
}