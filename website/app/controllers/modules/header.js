(function () {
  'use strict';

  var controllerId = 'header';
  angular.module('app').controller(controllerId, ['$scope', headerCtrl]);

  function headerCtrl($scope) {
    $scope.content = content;
  }

  var navbar = [{
    text: 'home',
    uiSref: 'home'
  }, {
    text: 'about us',
    uiSref: ''
  }, {
    text: 'locations',
    uiSref: ''
  }, {
    text: 'rent',
    uiSref: 'rent.cpap'
  }, {
    text: 'auto re-supply',
    uiSref: 'reSupply.info'
  }, {
    text: 'home sleep',
    uiSref: ''
  }, {
    text: 'testimonials',
    uiSref: ''
  }];

})();

