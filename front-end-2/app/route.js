var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/catalog");

  $stateProvider
    .state('catalog', {
      url: '/catalog',
      templateUrl: 'app/views/catalog.html',
      controller: 'catalog',
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state('machine', {
      url: '/machine',
      templateUrl: 'app/views/machine.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state("machine.type", {
      url: '/:type',
      templateUrl: 'app/views/machine-data.html',
      controller: "machine",
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state('billing', {
      url: '/billing',
      templateUrl: 'app/views/billing.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state('thanks', {
      url: '/thanks',
      templateUrl: 'app/views/thanks.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
});
