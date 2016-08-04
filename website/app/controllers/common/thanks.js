(function () {
  'use strict';

  var controllerId = 'thanks';
  angular.module('app').controller(controllerId, ['$scope', thanksCtrl]);

  function thanksCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

