(function(window, $) {

  $(function() {

    $('.js-pushMe').on('click', function() {
      $('.js-target').append($('<div>').text('pushMe'));
    });
  });

})(window, jQuery);
