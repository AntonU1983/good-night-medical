var app = angular.module('app');

'use strict';
var controllerId = 'help';
app.controller('help', ['$scope', '$state', 'dataService', 'globalConstants' , function ($scope, $state, dataService, globalConstants) {

  $scope.data = [];

  dataService.getMachines().success(function (result) {
    $scope.data  = result;
  });

}]);
