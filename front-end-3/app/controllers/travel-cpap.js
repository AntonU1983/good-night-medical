(function() {
  'use strict';

  var controllerId = 'TravelCpapCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.content = content;
  }

  var content = {
    pageTitle: 'Rent a Travel CPAP',
    blockImgUrl: 'travel-cpap.png',
    blockDescription: 'less than $1 a day!',
    bodyTitle: 'Other Machines Available for Rent',
    imgUrl: ['1.png', '2.png', '3.png', '4.png']
  };

})();
