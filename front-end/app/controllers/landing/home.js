landingApp.controller('HomeCtrl', function($scope) {

  $scope.returnHeight = function() {
    return { height: window.innerHeight + 40 + 'px' };
  }

  $scope.returnStyleOne = function(valid, dirty) {
    if (valid && dirty) {
      return { 'box-shadow': '0 0 15px rgba(229, 57, 53, 1)' };
    }
  }

  $scope.returnStyleTwo = function(valid, dirty) {
    if (valid && dirty) {
      return { 'border-color': 'rgba(229, 57, 53, 1)' };
    }
  }

  $scope.returnDisabled = function(name, email, phone) {
    if (name && email && phone) {return false;}
    else                        {return true;}
  }

});
