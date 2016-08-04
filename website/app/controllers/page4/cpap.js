(function () {
  'use strict';

  var controllerId = 'cpap';
  angular.module('app').controller(controllerId, ['$scope', cpapCtrl]);

  function cpapCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

