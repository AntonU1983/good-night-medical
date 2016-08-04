(function () {
  'use strict';

  var controllerId = 'catalog';
  angular.module('app').controller(controllerId, ['$scope', catalogCtrl]);

  function catalogCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

