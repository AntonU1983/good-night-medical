(function() {
  'use strict';

  var controllerId = 'IndexCtrl';
  angular.module('app').controller(controllerId, ['$scope', 'dataService', formsController]);

  function formsController($scope, dataService) {
    $scope.modalShowBoolean = false;
    $scope.rentalForm = {};
    $scope.rent = {
      fullName: '',
      email: '',
      phone: '',
      prescription: 'Unsure',
      contact: 'Email',
      program: '',
      comments: ''
    };
    
    $scope.modalShow = function(programName) {
      if ($scope.modalShowBoolean){
        $scope.modalShowBoolean = false;
        clearForm($scope.rentalForm);
      } else {
        $scope.modalShowBoolean = true;
        $scope.rent.program = programName;
      }
    };

    $scope.sendData = function(form) {
      if (form.$valid) {
        dataService.submitRent($scope.rent).success(function (){
          $scope.modalShowBoolean = false;
          clearForm(form);
        })
      }
      else {
        // error, forn invalid
      }
    };

    function clearForm(form){
      form.$setPristine();

      $scope.rent = {
        fullName: '',
        email: '',
        phone: '',
        prescription: "No",
        contact: "Email",
        comments: '',
        program: ''
      }
    }
  }

})();
