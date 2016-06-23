var mainApp = angular.module('mainApp', []);

mainApp.controller('MainCtrl', function($scope, $http) {

  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}

})
