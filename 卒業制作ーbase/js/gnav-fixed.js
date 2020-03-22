var _window = $(window),
  _header = $('.l-header'),
  heroBottom,
  startPos,
  winScrollTop;

_window.on('scroll', function () {
  winScrollTop = $(this).scrollTop();
  heroBottom = $('.l-hero').height();
  if (winScrollTop >= startPos) {
    if (winScrollTop >= heroBottom) {
      _header.addClass('js-hide');
    }
  } else {
    _header.removeClass('js-hide');
  }
  startPos = winScrollTop;
});

_window.trigger('scroll');
