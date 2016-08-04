(function () {
  'use strict';

  var controllerId = 'rentMachine';
  angular.module('app').controller(controllerId, ['$scope', rentMachineCtrl]);

  function rentMachineCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

