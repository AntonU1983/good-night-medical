landingApp.controller('HomeCtrl', function($scope) {
  // Вычисляем высоту видимой части окна браузера
  // Плюс 40px чтобы точно снизу обрезать дугой фон
  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}
});
