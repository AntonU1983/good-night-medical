(function (){
  'use strict';
  var app = angular.module('app');

  app.constant('globalConstants', {
    apiUrl: "http://localhost:51925/",
    //apiUrl: "http://goodnight-medical-demo.azurewebsites.net/",
    landingId: "admin",
    defaultPage: 1,
    numberPerPage: 10,
    localStoragePrefix: 'ls',
    localStorageKey: 'authorizationData',
    doctorPrescription: [ "Unsure", "Yes", "No" ],
    availableTypes: ["New", "Refurbished", "Bipap"]
  });

})();
