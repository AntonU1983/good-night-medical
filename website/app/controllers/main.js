(function () {
  'use strict';

  var controllerId = 'main';
  angular.module('app').controller(controllerId, ['$scope', mainCtrl]);

  function mainCtrl($scope) {
    $scope.content = content;
  }

  var content = 'Testing Page';

})();

