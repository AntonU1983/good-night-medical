(function() {
  'use strict';

  var controllerId = 'MainCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.phoneNumber = phoneNumber;
    $scope.links = links;
  }

  var phoneNumber = '877-753-3742';
  var links = [{
    text: 'home',
    uiSref: ''
  }, {
    text: 'about us',
    uiSref: ''
  }, {
    text: 'buy',
    uiSref: ''
  }, {
    text: 'rent',
    uiSref: ''
  }, {
    text: 'auto re-supply',
    uiSref: ''
  }, {
    text: 'home sleep',
    uiSref: ''
  }, {
    text: 'billing',
    uiSref: ''
  }, {
    text: 'faq',
    uiSref: ''
  }];

})();
