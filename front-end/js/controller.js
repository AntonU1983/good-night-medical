var landingApp = angular.module('landingApp', []);
var catalogApp = angular.module('catalogApp', []);


landingApp.controller('HomeCtrl', function($scope) {
  // Вычисляем высоту видимой части окна браузера
  // Плюс 40px чтобы точно снизу обрезать дугой фон
  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}
})

catalogApp.controller('CatalogCtrl', function($scope){

  $scope.models = [{
    name: 'ResMed S10 AirSense Auto/Pro',
    photo: 'images/cpap-machines/resmed-s10-airsense-auto-pro.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-2.jpg',
    userThree: 'images/avatars/user-3.jpg',
    reviews: '31',
    cost: '65'
  }, {
    name: 'Phillips Respironics DreamStation Auto/Pro',
    photo: 'images/cpap-machines/philips-respironics-dreamstation-auto-pro.jpg',
    userOne: 'images/avatars/user-4.jpg',
    userTwo: 'images/avatars/user-5.jpg',
    userThree: 'images/avatars/user-6.jpg',
    reviews: '4',
    cost: '65'
  }, {
    name: 'Fisher & Paykel ICON Premo/Auto',
    photo: 'images/cpap-machines/fisher-and-paykel-icon-premo-auto.jpg',
    userOne: 'images/avatars/user-7.jpg',
    userTwo: 'images/avatars/user-8.jpg',
    userThree: 'images/avatars/user-6.jpg',
    reviews: '25',
    cost: '49'
  }, {
    name: 'ResMed S10 AirSense Auto',
    photo: 'images/cpap-machines/resmed-s10-airsense-auto.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-3.jpg',
    userThree: 'images/avatars/user-5.jpg',
    reviews: '19',
    cost: '45'
  }, {
    name: 'Phillips Respironics RemStar System One Auto',
    photo: 'images/cpap-machines/philips-respironics-remstar-system-one-auto.jpg',
    userOne: 'images/avatars/user-2.jpg',
    userTwo: 'images/avatars/user-3.jpg',
    userThree: 'images/avatars/user-4.jpg',
    reviews: '17',
    cost: '45'
  }, {
    name: 'Fisher & Paykel ICON Auto',
    photo: 'images/cpap-machines/fisher-and-paykel-icon-auto.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-5.jpg',
    userThree: 'images/avatars/user-3.jpg',
    reviews: '4',
    cost: '29'
  }, {
    name: 'Resmed S9 Auto/CPAP',
    photo: 'images/cpap-machines/resmed-s9-auto-cpap.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-4.jpg',
    userThree: 'images/avatars/user-7.jpg',
    reviews: '1',
    cost: '29'
  }, {
    name: 'Phillips Respironics System One Auto',
    photo: 'images/cpap-machines/philipsr-respironics-system-one-auto.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-1.jpg',
    userThree: 'images/avatars/user-5.jpg',
    reviews: '5',
    cost: '29'
  }, {
    name: 'Phillips Respironics DreamStation BiPAP',
    photo: 'images/cpap-machines/philips-respironics-dreamstation-bipap.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-4.jpg',
    userThree: 'images/avatars/user-2.jpg',
    reviews: '12',
    cost: '75'
  }]

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
