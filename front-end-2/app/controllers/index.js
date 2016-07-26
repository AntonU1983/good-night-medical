(function() {
  'use strict';

  var controllerId = 'IndexCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.modalShowBoolean = false;

    $scope.modalShow = function () {
      if ($scope.modalShowBoolean) {$scope.modalShowBoolean = false;}
      else                         {$scope.modalShowBoolean = true;}
    };
  }

})();
