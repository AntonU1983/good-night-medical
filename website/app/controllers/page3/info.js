(function () {
  'use strict';

  var controllerId = 'info';
  angular.module('app').controller(controllerId, ['$scope', infoCtrl]);

  function infoCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

