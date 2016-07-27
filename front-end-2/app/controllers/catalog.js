(function() {
  'use strict';

  var controllerId = 'catalog';
  angular.module('app').controller(controllerId, ['$scope','dataService', formsController]);

  function formsController($scope, dataService) {

    dataService.getCatalog().success(function (data) {
      $scope.content = data;
    });
  }
})();
