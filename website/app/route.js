var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider /*
    * page1.html states
    * home
    * old: lp1 main
    */
    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/page1.html',
      onEnter: function() {window.scrollTo(0,0);}
    }) /*
    * page2.html states
    * rental programm
    * old: lp2 catalog,
    *      lp2 machine-1,
    *      lp2 machine-2,
    *      lp2 machine-3
    */
    .state('rent', {
      url: '',
      templateUrl: 'app/templates/page2.html'
    })
      .state('rent.catalog', {
        url: '/rent/catalog',
        templateUrl: 'app/views/page2/catalog.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('rent.machine', {
        url: '/rent/machine',
        templateUrl: 'app/views/page2/machine.html',
        onEnter: function() {window.scrollTo(0,0);}
      }) /*
    * page3.html states
    * auto re supply
    * old: lp3 re supply,
    *      lp3 form
    */
    .state('reSupply', {
      url: '',
      templateUrl: 'app/templates/page3.html'
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
      }) /*
    * page4.html states
    * catalog with all machine
    * old: lp1 catalog,
    *      lp1 pages
    */
    .state('catalog', {
      url: '',
      templateUrl: 'app/templates/page4.html'
    })
      .state('catalog.cpap', {
        url: '/catalog/cpap',
        templateUrl: 'app/views/page4/cpap.html',
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('catalog.help', {
        url: '/catalog/help',
        templateUrl: 'app/views/page4/help.html',
        onEnter: function() {window.scrollTo(0,0);}
      }) /*
    * page5.html states
    * home sleep test
    * old: lp3 sleep test
    */
    .state('sleepTest', {
      url: '',
      templateUrl: 'app/templates/page5.html'
    })
      .state('sleepTest.info', {
        url: '/sleep-test/info',
        templateUrl: 'app/views/page5/info.html',
        onEnter: function() {window.scrollTo(0,0);}
      }) /*
    * common.html states
    * billing, thanks
    * old: lp2 billing,
    *      lp2 thanks
    */
    .state('common', {
      url: '',
      templateUrl: 'app/templates/common.html'
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
      }) /*
    * testing.html states
    * pages for testingdifferent elements
    */
    .state('testing', {
      url: '/testing',
      templateUrl: 'app/templates/testing.html'
    })
      .state('testing.page1', {
        url: '/page1',
        templateUrl: 'app/views/testing/page1.html',
        onEnter: function() {window.scrollTo(0,0);}
      })

});
