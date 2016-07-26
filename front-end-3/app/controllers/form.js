(function() {
  'use strict';

  var controllerId = 'FormCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.content = content;
  }

  var content = 123;

})();
