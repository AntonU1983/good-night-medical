var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main-re-supply")

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'app/views/main.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('main.reSupply', {
        url: '-re-supply',
        templateUrl: 'app/views/re-supply.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('main.form', {
        url: '-form',
        templateUrl: 'app/views/form.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('main.sleepTest', {
        url: '-sleep-test',
        templateUrl: 'app/views/sleep-test.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('main.travelCpap', {
        url: '-travel-cpap',
        templateUrl: 'app/views/travel-cpap.html',
        onEnter: function() {window.scrollTo(0,0);}
      })

});
