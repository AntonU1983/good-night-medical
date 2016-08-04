(function () {
  'use strict';

  var controllerId = 'block1';
  angular.module('app').controller(controllerId, ['$scope', block1Ctrl]);

  function block1Ctrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

