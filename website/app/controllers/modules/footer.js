(function () {
  'use strict';

  var controllerId = 'footer';
  angular.module('app').controller(controllerId, ['$scope', footerCtrl]);

  function footerCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

