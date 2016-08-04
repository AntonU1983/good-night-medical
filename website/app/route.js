var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/page1.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state('rentalProgram', {
      url: '',
      templateUrl: 'app/templates/page2.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('rentalProgram.catalog', {
        url: '/rental-program/catalog',
        templateUrl: 'app/views/page2/catalog.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('rentalProgram.machine', {
        url: '/rental-program/machine',
        templateUrl: 'app/views/page2/machine.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
    .state('reSupply', {
      url: '',
      templateUrl: 'app/templates/page3.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('reSupply.info', {
        url: '/re-supply/info',
        templateUrl: 'app/views/page3/info.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('reSupply.form', {
        url: '/re-supply/form',
        templateUrl: 'app/views/page3/form.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
    .state('rent', {
      url: '',
      templateUrl: 'app/templates/page4.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('rent.cpap', {
        url: '/rent/cpap',
        templateUrl: 'app/views/page4/cpap.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('rent.help', {
        url: '/rent/help',
        templateUrl: 'app/views/page4/help.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
    .state('common', {
      url: '',
      templateUrl: 'app/templates/common.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('common.billing', {
        url: '/billing',
        templateUrl: 'app/views/common/billing.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('common.thanks', {
        url: '/thanks',
        templateUrl: 'app/views/common/thanks.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
    .state('testing', {
      url: '/testing',
      templateUrl: 'app/templates/testing.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('testing.page1', {
        url: '/page1',
        templateUrl: 'app/views/testing/page1.html',
        onEnter: function() {window.scrollTo(0,0);}
      })

});
