// Плавная прокрутка при нажатие на якорь
$(document).ready(function() {
  $("a[href*='#']").click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
          .animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });
});

// Логика взаимодействия слайдера в боковой панели страницы Catalog
// div с #slider создает слайдер с двумя ползунками
// Два input (#minCost и #maxCost) хранят в себе данные ползунков для AngularJS
// Два div (#minCostDiv и #maxCostDiv) хранят в себе данные ползунков для вывода пользователю
jQuery(document).ready(function() {
  jQuery("#slider").slider({
    min: 0,
    max: 75,
    values: [0, 75],
    range: true,
    create: function(event, ui) {
      // Вносим данные когда создался slider
      jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
      jQuery("div#minCostDiv").text("$"+jQuery("#slider").slider("values", 0));
      jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
      jQuery("div#maxCostDiv").text("$"+jQuery("#slider").slider("values", 1));
    },
    slide: function(event, ui) {
      // Изменяем данные когда пользователь двигает ползунок
      jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
      jQuery("div#minCostDiv").text("$"+jQuery("#slider").slider("values", 0));
      jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
      jQuery("div#maxCostDiv").text("$"+jQuery("#slider").slider("values", 1));
    },
    stop: function(event, ui) {
      // Изменяем данные когда пользователь перестал двигать ползнуок
      jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
      jQuery("div#minCostDiv").text("$"+jQuery("#slider").slider("values", 0));
      jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
      jQuery("div#maxCostDiv").text("$"+jQuery("#slider").slider("values", 1));
    }
  });
});

