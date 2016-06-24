var landingApp = angular.module('landingApp', []);

landingApp.controller('HomeCtrl', function($scope) {
  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}
})
