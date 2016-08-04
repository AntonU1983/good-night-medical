(function () {
  'use strict';

  var controllerId = 'catalogCpap';
  angular.module('app').controller(controllerId, ['$scope', catalogCpapCtrl]);

  function catalogCpapCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

