(function () {
  'use strict';

  var controllerId = 'header';
  angular.module('app').controller(controllerId, ['$scope', headerCtrl]);

  function headerCtrl($scope) {
    $scope.navbar = navbar;
    $scope.phoneNumber = phoneNumber;
    $scope.navMenu = false;

    $scope.showMenu = function() {$scope.navMenu = true;}
    $scope.hideMenu = function() {$scope.navMenu = false;}
  }

  var phoneNumber = '877-753-3742';

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
    uiSref: 'rent.catalog'
  }, {
    text: 'auto re-supply',
    uiSref: 'reSupply.info'
  }, {
    text: 'home sleep',
    uiSref: 'sleepTest.info'
  }, {
    text: 'testimonials',
    uiSref: ''
  }];

})();

