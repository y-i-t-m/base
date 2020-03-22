(function () {
  $('#js-button-hamburger').click(function () {
    $('.gnav').toggleClass('is-active');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });
})();
