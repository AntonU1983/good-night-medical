(function () {
  'use strict';

  var controllerId = 'machine';
  angular.module('app').controller(controllerId, ['$scope', machineCtrl]);

  function machineCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

