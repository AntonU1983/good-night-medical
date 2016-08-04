(function () {
  'use strict';

  var controllerId = 'block2';
  angular.module('app').controller(controllerId, ['$scope', block2Ctrl]);

  function block2Ctrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

