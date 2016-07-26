(function() {
  'use strict';

  var controllerId = 'ReSupplyCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.title1 = title1;
    $scope.title2 = title2;
    $scope.text1 = text1;
    $scope.text2 = text2;
    $scope.text3 = text3;
  }

  var title1 = 'CPAP Automatic Re-Supply';
  var title2 = 'Supplies Every 3 Month';
  var text1 = 'new cpap';
  var text2 = 'supplies';
  var text3 = 'delivered to your door!';

})();
