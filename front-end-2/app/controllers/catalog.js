(function() {
  'use strict';

  var controllerId = 'CatalogCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.content = content;
  }

  var content = [{
    imgUrl: 'resmed-s9-auto-cpap.jpg',
    title: 'Refurbished CPAP',
    everyW1: 'monthly',
    everyW2: 'price',
    shipsW1: '+2.00',
    shipsW2: 'S&H',
    price: '29',
    description: 'Our most affordable option, refurbished machines are perfect for users who are currently or have previously undergone therapy. Each machines goes through a rigorous 27 point inspection and cleaning',
    list: [
      'No insurance necessary',
      'Standard pressure capability',
      'The Good Knight’s Guarantee',
      'Humidifier included'
    ],
    uiSref: 'machine.refCpap'
  }, {
    imgUrl: 'resmed-s10-airsense-auto.jpg',
    title: 'New CPAP',
    everyW1: 'monthly',
    everyW2: 'price',
    shipsW1: 'ships',
    shipsW2: 'free',
    price: '49',
    description: 'Looking for a machine insurance will cover? Sometimes insurance requires starting out on rentals. These machines provide the highest quality care, with data upload capability and advanced pressure titration',
    list: [
      'Full compliance and efficacy reporting',
      'Auto adjusting pressure',
      'Manufacturer’s Warranty',
      'Covered by most insurance'
    ],
    uiSref: 'machine.newCpap'
  }, {
    imgUrl: 'philips-respironics-dreamstation-bipap.jpg',
    title: 'BiPAP',
    everyW1: 'monthly',
    everyW2: 'price',
    shipsW1: 'ships',
    shipsW2: 'free',
    price: '75',
    description: 'Premium bilevel sleep therapy that automatically adjusts inspiratory and expiratory pressure on a breath-by-breath basis',
    list: [
      'Perfect for high pressure settings or low oxygen levels',
      'Bi-level auto adjusting pressure',
      'Manufacturer’s Warranty',
      'Humidifier included'
    ],
    uiSref: 'machine.newBipap'
  }];

})();
