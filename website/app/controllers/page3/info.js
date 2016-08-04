(function () {
  'use strict';

  var controllerId = 'reSupplyInfo';
  angular.module('app').controller(controllerId, ['$scope', reSupplyInfoCtrl]);

  function reSupplyInfoCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

