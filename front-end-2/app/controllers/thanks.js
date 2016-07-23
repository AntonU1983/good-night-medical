(function() {
  'use strict';

  var controllerId = 'ThanksCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.title = title;
    $scope.content = content;

    $scope.haveAddressOpt = function (address) {
      if (address == '') {return false;}
      else               {return true;}
    };
  }

  var title = 'Thank you for your submission! We will follow up with you via phone or email in the next few days to complete your order';

  var content = [{
    title: 'Shipping',
    firstName: 'Artyom',
    lastName: 'Danilchenko',
    address1: 'pr. Satpaev',
    address2: 'pr. Lenina',
    state: 'Karagandy',
    zip: 101302
  }, {
    title: 'Billing',
    firstName: 'Artyom',
    lastName: 'Danilchenko',
    address1: 'pr. Satpaev',
    address2: '',
    state: 'Karagandy',
    zip: 101302
  }];

})();
