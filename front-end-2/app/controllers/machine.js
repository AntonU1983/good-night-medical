(function() {
  'use strict';

  var controllerId = 'machine';
  angular.module('app').controller(controllerId, ['$scope', '$stateParams','dataService', formsController]);

  function formsController($scope, $stateParams, dataService) {
    var type = $stateParams.type;
    
    dataService.getMachinesByType(type).success(function (data) {
      $scope.data = data;
    });
    
}})();
