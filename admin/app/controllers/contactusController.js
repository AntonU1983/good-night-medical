var app = angular.module('app');

'use strict';
app.controller('ContactUs', ['$scope', '$state', 'dataService', 'globalConstants', function ($scope, $state, dataService, globalConstants) {
    $scope.currentPage = globalConstants.currentPage;
    $scope.numberPerPage = globalConstants.numberPerPage;
    $scope.maxSize = 5;
    $scope.readContactInfo = false;
  
    $scope.currentUser = {};
    $scope.contactMsg = [];
    $scope.filtredMessages = [];
  
    $scope.read = read;
    $scope.markAsRead = marAsRead;
    $scope.pageChanged = pageChanged;

    dataService.getContacts().success(function (data) {
        $scope.contactMsg = data;
    });

    function read(id) {
      $scope.currentUser = $scope.contactMsg.find(function(contact) {
        return contact.id === id;
      });

      $scope.readContactInfo = true;

    }
  
    function marAsRead(){
      dataService.setReadContact($scope.currentUser.id).success(function () {
        $scope.currentUser.new = false;
      });
    }

    function pageChanged(){
      var begin = (($scope.currentPage - 1) * $scope.numberPerPage)
        , end = begin + $scope.numberPerPage;

      $scope.filtredMessages = $scope.contactMsg.slice(begin, end);
    }
}]);
