(function () {
  'use strict';

  var controllerId = 'block3';
  angular.module('app').controller(controllerId, ['$scope', block3Ctrl]);

  function block3Ctrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

