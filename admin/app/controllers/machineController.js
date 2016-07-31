var app = angular.module('app');

'use strict';
var controllerId = 'machine';
app.controller(controllerId, ['$scope', '$state', 'dataService', 'globalConstants', '$stateParams','FileUploader', function ($scope, $state, dataService, globalConstants, $stateParams, FileUploader) {

  $scope.data = [];
  $scope.machineDetail = {type: 'New', refurbished: false};
  $scope.availableTypes = globalConstants.availableTypes;
  $scope.readMachineInfo = false;

  $scope.initData = initData;
  $scope.getDetails = getDetails;
  $scope.addOrUpdate = addOrUpdate;
  
  var uploader = $scope.uploader = new FileUploader({
    url: globalConstants.apiUrl + 'api/image/upload',
    autoUpload: true
  });

  uploader.onSuccessItem = function(response) {
    $scope.machineDetail.imageUrl = response._xhr.response;
  };

  dataService.getMachines().success(function (data) {
    $scope.data = data;
  });

   function initData() {
      if($stateParams.id !== undefined){
        dataService.getMachineId($stateParams.id).success(function (data) {
          $scope.machineDetail = data;
        });
      }
  }
  
  function getDetails(id) {
    dataService.getMachineId(id).success(function (data) {
      $scope.readMachineInfo = true;
      $scope.machineDetail = data;
    });
  }
  
  function addOrUpdate() {
    if($stateParams.id !== undefined){
      dataService.putMachine($stateParams.id, $scope.machineDetail).success(function (data) {
        $state.go('main.machine');
      });
    }else{
      dataService.postMachine($scope.machineDetail).success(function () {
        dataService.getMachines().success(function (data) {
          $scope.data = data;
        });
        
        $state.go('main.machine');
      });
    }
  }
}]);
