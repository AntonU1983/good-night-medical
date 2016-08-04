(function () {
  'use strict';

  var controllerId = 'reSupplyForm';
  angular.module('app').controller(controllerId, ['$scope', reSupplyFormCtrl]);

  function reSupplyFormCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

