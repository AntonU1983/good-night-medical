(function () {
  'use strict';

  var controllerId = 'billing';
  angular.module('app').controller(controllerId, ['$scope', billingCtrl]);

  function billingCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

