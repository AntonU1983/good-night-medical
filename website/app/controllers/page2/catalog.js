(function () {
  'use strict';

  var controllerId = 'rentCatalog';
  angular.module('app').controller(controllerId, ['$scope', rentCatalogCtrl]);

  function rentCatalogCtrl($scope) {
    $scope.content = content;
  }

  var content = '';

})();

