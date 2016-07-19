var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/catalog")

  $stateProvider
    .state('catalog', {
      url: '/catalog',
      templateUrl: 'app/views/catalog.html'
    })
    .state('machine', {
      url: '/machine',
      templateUrl: 'app/views/machine.html'
    })
      .state('machine.refCpap', {
        url: '-refurbished-cpap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = refCpap;},
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('machine.newCpap', {
        url: '-new-cpap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = newCpap;},
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('machine.refBipap', {
        url: '-refurbished-bipap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {},
        onEnter: function() {window.scrollTo(0,0);}
      })
      .state('machine.newBipap', {
        url: '-new-bipap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = newBipap;},
        onEnter: function() {window.scrollTo(0,0);}
      })
    .state('billing', {
      url: '/billing',
      templateUrl: 'app/views/billing.html'
    })
    .state('thanks', {
      url: '/thanks',
      templateUrl: 'app/views/thanks.html'
    })
});
