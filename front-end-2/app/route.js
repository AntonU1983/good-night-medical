var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/catalog")

  $stateProvider
    .state('catalog', {
      url: '/catalog',
      templateUrl: 'app/views/catalog.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
    .state('machine', {
      url: '/machine',
      templateUrl: 'app/views/machine.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
      .state('machine.refCpap', {
        url: '-refurbished-cpap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = $scope.refCpap;}
      })
      .state('machine.newCpap', {
        url: '-new-cpap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = $scope.newCpap;}
      })
      // .state('machine.refBipap', {
      //   url: '-refurbished-bipap',
      //   templateUrl: 'app/views/machine-data.html',
      //   controller: function($scope) {}
      // })
      .state('machine.newBipap', {
        url: '-new-bipap',
        templateUrl: 'app/views/machine-data.html',
        controller: function($scope) {$scope.data = $scope.newBipap;}
      })
    // .state('billing', {
    //   url: '/billing',
    //   templateUrl: 'app/views/billing.html',
    //   onEnter: function() {window.scrollTo(0,0);}
    // })
    .state('thanks', {
      url: '/thanks',
      templateUrl: 'app/views/thanks.html',
      onEnter: function() {window.scrollTo(0,0);}
    })
});
