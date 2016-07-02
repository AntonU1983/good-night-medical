var app = angular.module('app', ['angular-ellipses', 'ui.router', 'LocalStorageModule']);

app.constant('globalConstants', {
  apiUrl: "http://localhost:51925/"
  //apiUrl: "http://goodnight-medical-demo.azurewebsites.net/"
});

app.controller('Ctrl', function($scope, $http) {

  var view = 1;
  var pageUrl = [
    'dashboard.html',
    'data-contact-us-msg.html',
    'data-rent-msg.html',
    'data-help-msg.html',
    'machine.html'];

  $http.get('content/data/contact-msg.json').success(function(data){$scope.contactMsg = data;});
  $http.get('content/data/rent-msg.json').success(function(data){$scope.rentMsg = data;});
  $http.get('content/data/help-msg.json').success(function(data){$scope.helpMsg = data;});
  $http.get('content/data/machine.json').success(function(data){$scope.machineData = data;});

  $scope.pageSelection = function(pageNumber) {view = pageNumber;}
  $scope.returnViewPage = function() {return 'views/' + pageUrl[view];}
  $scope.returnActiveClass = function(pageNumber) {return (pageNumber == view) ? 'active' : '';}
  $scope.returnClassNewMsg = function(newMsg) {return newMsg ? 'new' : '';};

  $scope.hideMachine = function(msgNew, hideOld, hideNew) {
    if (hideOld && !msgNew) {return true;}
    if (hideNew && msgNew) {return true;}
  };

});

app.run(function($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
  });
});

