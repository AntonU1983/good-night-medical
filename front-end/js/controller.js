var landingApp = angular.module('landingApp', []);
var catalogApp = angular.module('catalogApp', []);


landingApp.controller('HomeCtrl', function($scope) {
  // Вычисляем высоту видимой части окна браузера
  // Плюс 40px чтобы точно снизу обрезать дугой фон
  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}
})

catalogApp.controller('CatalogCtrl', function($scope){
  // Вычисляем высоту боковой панели
  // Минус отступы и header
  // Получаем красивую боковую панель
  $scope.returnHeight = function() {return {height: window.innerHeight - 130 + 'px'};}

  // Смена стилей для первой пары кнопок фильтрации
  $scope.returnClassBtnFilterOne = function(number) {
    if ($scope.filterOne == number) {return 'form-btn-active'}
    else  {return 'form-btn-inactive'}
  }

  // Смена стилей для второй пары кнопок фильтрации
  $scope.returnClassBtnFilterTwo = function(number) {
    if ($scope.filterTwo == number) {return 'form-btn-active'}
    else  {return 'form-btn-inactive'}
  }
})
