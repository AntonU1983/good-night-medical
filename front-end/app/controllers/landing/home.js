landingApp.controller('HomeCtrl', function($scope) {

  $scope.hiddenModal = true;
  $scope.fieldsValidOne = true;
  $scope.fieldsValidTwo = true;

  $scope.returnHeight = function() {
    return { height: window.innerHeight + 40 + 'px' };
  }

  $scope.returnStyleOne = function(invalid, dirty) {
    if ((invalid && dirty) || (!dirty && !($scope.fieldsValidOne))) {
      return { 'box-shadow': '0 0 15px rgba(229, 57, 53, 1)' };
    }
  }

  $scope.returnStyleTwo = function(invalid, dirty) {
    if ((invalid && dirty) || (!dirty && !($scope.fieldsValidTwo))) {
      return { 'border-color': 'rgba(229, 57, 53, 1)' };
    }
  }
  $scope.checkFieldsOne = function(name, email, phone) {
    if (name && email && phone) {$scope.fieldsValidOne = false;}
    else                        {$scope.fieldsValidOne = true;}
  }

  $scope.checkFieldsTwo = function(name, email, phone) {
    if (name && email && phone) {$scope.fieldsValidTwo = false;}
    else                        {$scope.fieldsValidTwo = true;}
  }

});
