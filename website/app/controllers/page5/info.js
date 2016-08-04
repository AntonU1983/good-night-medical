(function () {
  'use strict';

  var controllerId = 'sleepTestInfo';
  angular.module('app').controller(controllerId, ['$scope', sleepTestInfoCtrl]);

  function sleepTestInfoCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

