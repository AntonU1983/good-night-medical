(function () {
  'use strict';

  var controllerId = 'form';
  angular.module('app').controller(controllerId, ['$scope', formCtrl]);

  function formCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

