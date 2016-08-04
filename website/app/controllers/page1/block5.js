(function () {
  'use strict';

  var controllerId = 'block5';
  angular.module('app').controller(controllerId, ['$scope', block5Ctrl]);

  function block5Ctrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

