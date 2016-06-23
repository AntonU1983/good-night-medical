var mainApp = angular.module('mainApp', []);

mainApp.controller('MainCtrl', function($scope) {

  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}

})

mainApp.controller('SliderCtrl', function($scope){

  $scope.count = 1;

  $scope.prev = function() {
    if ($scope.count > 1) {$scope.count--;}
    else                  {$scope.count = 3;}
  }

  $scope.next = function() {
    if ($scope.count < 3) {$scope.count++;}
    else                  {$scope.count = 1;}
  }

})
