(function () {
  'use strict';

  var controllerId = 'help';
  angular.module('app').controller(controllerId, ['$scope', helpCtrl]);

  function helpCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

