(function() {
  'use strict';

  var app = angular.module('app', [
    'ngAnimate',
    'ui.router',
    'angular-loading-bar'
  ])
    .config(function($animateProvider) {
        // Анимация для определенных элементов
        $animateProvider.classNameFilter(/animate-on/);
    });

  // Handle routing errors and success events
  app.run([function () {
    // Include $route to kick start the router.
  }]);

})();
