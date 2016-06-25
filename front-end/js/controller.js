var landingApp = angular.module('landingApp', []);
var catalogApp = angular.module('catalogApp', []);


landingApp.controller('HomeCtrl', function($scope) {
  // Вычисляем высоту видимой части окна браузера
  // Плюс 40px чтобы точно снизу обрезать дугой фон
  $scope.returnHeight = function() {return {height: window.innerHeight + 40 + 'px'};}
})

catalogApp.controller('CatalogCtrl', function($scope){

  $scope.models = cpapMachine;

  // Вычисляем высоту боковой панели
  // Минус отступы и header
  // Получаем красивую боковую панель
  $scope.returnHeight = function() {return {height: window.innerHeight - 130 + 'px'};}

  // Смена стилей для первой пары кнопок фильтрации
  $scope.returnClassBtnFilterOne = function(number) {
    if ($scope.filterOne == number) {return 'form-btn-active'}
    else  {return 'form-btn-inactive'}
  }

  $scope.returnHideModel = function(companyOne, companyTwo, companyThree, company, originality) {
    if (!($scope.filterOne)) {
      if (!companyOne && !companyTwo && !companyThree) {return true;}
      else if (companyOne && (company == 'Philips')) {return true;}
      else if (companyTwo && (company == 'ResMed')) {return true;}
      else if (companyThree && (company == 'Fisher & Paykel')) {return true;}
      else {return false;}
    }
    else if ($scope.filterOne && (originality == 'true')) {
      if (!companyOne && !companyTwo && !companyThree) {return true;}
      else if (companyOne && (company == 'Philips')) {return true;}
      else if (companyTwo && (company == 'ResMed')) {return true;}
      else if (companyThree && (company == 'Fisher & Paykel')) {return true;}
      else {return false;}
    }
  }

})

var cpapMachine = [{
    company: 'ResMed',
    name: 'ResMed S10 AirSense Auto/Pro',
    type: 'cpap',
    originality: 'true',
    photo: 'images/cpap-machines/resmed-s10-airsense-auto-pro.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-2.jpg',
    userThree: 'images/avatars/user-3.jpg',
    reviews: '31',
    cost: '65'
  }, {
    company: 'Philips',
    name: 'Philips Respironics DreamStation Auto/Pro',
    type: 'cpap',
    originality: 'false',
    photo: 'images/cpap-machines/philips-respironics-dreamstation-auto-pro.jpg',
    userOne: 'images/avatars/user-4.jpg',
    userTwo: 'images/avatars/user-5.jpg',
    userThree: 'images/avatars/user-6.jpg',
    reviews: '4',
    cost: '65'
  }, {
    company: 'Fisher & Paykel',
    name: 'Fisher & Paykel ICON Premo/Auto',
    type: 'cpap',
    originality: 'true',
    photo: 'images/cpap-machines/fisher-and-paykel-icon-premo-auto.jpg',
    userOne: 'images/avatars/user-7.jpg',
    userTwo: 'images/avatars/user-8.jpg',
    userThree: 'images/avatars/user-6.jpg',
    reviews: '25',
    cost: '49'
  }, {
    company: 'ResMed',
    name: 'ResMed S10 AirSense Auto',
    type: 'cpap',
    originality: 'false',
    photo: 'images/cpap-machines/resmed-s10-airsense-auto.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-3.jpg',
    userThree: 'images/avatars/user-5.jpg',
    reviews: '19',
    cost: '45'
  }, {
    company: 'Philips',
    name: 'Philips Respironics RemStar System One Auto',
    type: 'cpap',
    originality: 'false',
    photo: 'images/cpap-machines/philips-respironics-remstar-system-one-auto.jpg',
    userOne: 'images/avatars/user-2.jpg',
    userTwo: 'images/avatars/user-3.jpg',
    userThree: 'images/avatars/user-4.jpg',
    reviews: '17',
    cost: '45'
  }, {
    company: 'Fisher & Paykel',
    name: 'Fisher & Paykel ICON Auto',
    type: 'cpap',
    originality: 'true',
    photo: 'images/cpap-machines/fisher-and-paykel-icon-auto.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-5.jpg',
    userThree: 'images/avatars/user-3.jpg',
    reviews: '4',
    cost: '29'
  }, {
    company: 'ResMed',
    name: 'ResMed S9 Auto/CPAP',
    type: 'cpap',
    originality: 'false',
    photo: 'images/cpap-machines/resmed-s9-auto-cpap.jpg',
    userOne: 'images/avatars/user-1.jpg',
    userTwo: 'images/avatars/user-4.jpg',
    userThree: 'images/avatars/user-7.jpg',
    reviews: '1',
    cost: '29'
  }, {
    company: 'Philips',
    name: 'Philips Respironics System One Auto',
    type: 'cpap',
    originality: 'false',
    photo: 'images/cpap-machines/philipsr-respironics-system-one-auto.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-1.jpg',
    userThree: 'images/avatars/user-5.jpg',
    reviews: '5',
    cost: '29'
  }, {
    company: 'Philips',
    name: 'Philips Respironics DreamStation BiPAP',
    type: 'bipap',
    originality: 'true',
    photo: 'images/cpap-machines/philips-respironics-dreamstation-bipap.jpg',
    userOne: 'images/avatars/user-8.jpg',
    userTwo: 'images/avatars/user-4.jpg',
    userThree: 'images/avatars/user-2.jpg',
    reviews: '12',
    cost: '75'
  }];
