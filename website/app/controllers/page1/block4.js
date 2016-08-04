(function () {
  'use strict';

  var controllerId = 'block4';
  angular.module('app').controller(controllerId, ['$scope', block4Ctrl]);

  function block4Ctrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

