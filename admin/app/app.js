var app = angular.module('app', ['angular-ellipses', 'ui.router']);

app.controller('Ctrl', function($scope, $http) {

  var view = 1;
  var pageUrl = [
    'dashboard.html',
    'data-contact-us-msg.html',
    'data-rent-msg.html',
    'data-help-msg.html',
    'machine-add.html',
    'machine-edit.html'];

  $http.get('content/data/contact-msg.json').success(function(data){$scope.contactMsg = data;});
  $http.get('content/data/rent-msg.json').success(function(data){$scope.rentMsg = data;});
  $http.get('content/data/help-msg.json').success(function(data){$scope.helpMsg = data;});

  $scope.pageSelection = function(pageNumber) {view = pageNumber;}
  $scope.returnViewPage = function() {return 'views/' + pageUrl[view];}
  $scope.returnActiveClass = function(pageNumber) {return (pageNumber == view) ? 'active' : '';}

})

