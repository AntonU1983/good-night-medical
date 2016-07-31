var app = angular.module('app');

'use strict';
var controllerId = 'rent';
app.controller(controllerId, ['$scope', '$state', 'dataService', 'globalConstants' , function ($scope, $state, dataService, globalConstants) {

    $scope.data = [];

    $scope.readRentInfo = false;

    $scope.currentRent = {};

    $scope.doctorPrescription = function (id) {
        return globalConstants.doctorPrescription[id];
    };

    dataService.getRents().success(function (data) {
        $scope.data = data;
    });

    $scope.read = function (id) {
        dataService.getRentId(id).success(function (data) {
          $scope.currentRent = data;
          $scope.readRentInfo = true;
        });
    };

    $scope.markAsRead = function(id) {
      dataService.setReadRent(id).success(function () {
        $scope.currentRent.isNew = false;

        var current = $scope.data.find(function (msg){
            return msg.id === id;
        });
        current.isNew = false;
      });

    }
}]);
