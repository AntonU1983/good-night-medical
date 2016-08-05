(function () {
  'use strict';

  var controllerId = 'footer';
  angular.module('app').controller(controllerId, ['$scope', footerCtrl]);

  function footerCtrl($scope) {
    $scope.aboutUs = aboutUs;
    $scope.copyright = copyright;
    $scope.statesLinks = statesLinks;
    $scope.socialLinks = socialLinks;
  }

  var aboutUs = 'Good Night Medical is proud to be nationally known for its strength and knowledge in the area of sleep medicine and home ventilation. Good Night Medical provides the required services needed to diagnose a Sleep Apnea patient in their home. Once diagnosed, Good Night Medical provides CPAP treatment via home ventilation and oxygen equipment to our patients. Good Night Medical is dedicated to saving patients on their healthcare costs. This includes fighting for their insurance coverage, offering low cost options for those without insurance, and finding ways to cut the costs of these products through innovative recycling, refurbishing, or sourcing.';

  var copyright = 'Copyright © 2016 Good Night Medical. All Rights Reserved.';

  var someObjUrl = {
    title: 'Some Title For Links',
    href: false,
    array: [{
      text: '',
      uiSref: ''
    }, {
      text: '',
      uiSref: ''
    }]
  };

  var statesLinks = [{
    text: 'Home',
    uiSref: 'home'
  }, {
    text: 'About Us',
    uiSref: ''
  }, {
    text: 'Locations',
    uiSref: ''
  }, {
    text: 'Rent',
    uiSref: 'rent.catalog'
  }, {
    text: 'Auto Re-Supply',
    uiSref: 'reSupply.info'
  }, {
    text: 'Home Sleep',
    uiSref: 'sleepTest.info'
  }, {
    text: 'Testimonials',
    uiSref: ''
  }];

  var socialLinks = [{
    text: 'Facebook',
    href: 'https://facebook.com/goodnightmed/'
  }, {
    text: 'Twitter',
    href: 'https://twitter.com/goodnightmed'
  }, {
    text: 'Pinterest­',
    href: 'https://pinterest.com/goodnightmed/'
  }];

})();

