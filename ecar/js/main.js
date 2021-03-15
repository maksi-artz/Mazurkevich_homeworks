'use strict';

// Header!!!
window.addEventListener('scroll', function () {
  var header = document.getElementById("nav");

  if (window.pageYOffset > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Tabs!!!
(function ($) {
  $(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
      $(this)
        .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

  });
})(jQuery);

// DAte!!!
$(function () {
  $("#datepicker").datepicker();
});

//dropdown
$(function () {
  $(".dropdown").selectmenu();
});




var TIMEOUT = 4000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}
