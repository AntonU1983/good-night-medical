(function () {
  'use strict';

  var controllerId = 'catalogHelpPick';
  angular.module('app').controller(controllerId, ['$scope', catalogHelpPickCtrl]);

  function catalogHelpPickCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

