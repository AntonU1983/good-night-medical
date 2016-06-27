catalogApp.controller('MainBodyCtrl', function($scope){

  $scope.models = cpapMachine;

  $scope.slider = {
    minValue: 0,
    maxValue: 75,
    options: {
        floor: 0,
        ceil: 75,
        step: 1
    }
  };

  // Вычисляем высоту боковой панели
  // Минус отступы и header
  // Получаем красивую боковую панель
  $scope.returnHeight = function() {return {height: window.innerHeight - 130 + 'px'};}

  // Смена стилей для первой пары кнопок фильтрации
  $scope.returnClassBtnFilterOne = function(number) {
    if ($scope.filterOne == number) {return 'form-btn-active'}
    else  {return 'form-btn-inactive'}
  }

  // Проверка, подходит ли машина под фильтры
  $scope.returnHideModel = function(companyOne, companyTwo, companyThree, company, originality, cost, minCost, maxCost) {
    if (!($scope.filterOne)) {
      if ((minCost <= cost) & ( cost <= maxCost)) {
        if (!companyOne && !companyTwo && !companyThree) {return true;}
        else if (companyOne && (company == 'Philips')) {return true;}
        else if (companyTwo && (company == 'ResMed')) {return true;}
        else if (companyThree && (company == 'Fisher & Paykel')) {return true;}
        else {return false;}
      }
    }
    else if ($scope.filterOne && (originality == 'true')) {
      if ((minCost <= cost) & ( cost <= maxCost)) {
        if (!companyOne && !companyTwo && !companyThree) {return true;}
        else if (companyOne && (company == 'Philips')) {return true;}
        else if (companyTwo && (company == 'ResMed')) {return true;}
        else if (companyThree && (company == 'Fisher & Paykel')) {return true;}
        else {return false;}
      }
    }
  }
})

var cpapMachine = [{
    company: 'ResMed',
    name: 'ResMed S10 AirSense Auto/Pro',
    photo: '../../content/images/machines/resmed-s10-airsense-auto-pro.jpg',
    cost: '65'
  }, {
    company: 'Philips',
    name: 'Philips Respironics DreamStation Auto/Pro',
    photo: '../../content/images/machines/philips-respironics-dreamstation-auto-pro.jpg',
    cost: '65'
  }, {
    company: 'Fisher & Paykel',
    name: 'Fisher & Paykel ICON Premo/Auto',
    photo: '../../content/images/machines/fisher-and-paykel-icon-premo-auto.jpg',
    cost: '49'
  }, {
    company: 'ResMed',
    name: 'ResMed S10 AirSense Auto',
    photo: '../../content/images/machines/resmed-s10-airsense-auto.jpg',
    cost: '45'
  }, {
    company: 'Philips',
    name: 'Philips Respironics RemStar System One Auto',
    photo: '../../content/images/machines/philips-respironics-remstar-system-one-auto.jpg',
    cost: '45'
  }, {
    company: 'Fisher & Paykel',
    name: 'Fisher & Paykel ICON Auto',
    photo: '../../content/images/machines/fisher-and-paykel-icon-auto.jpg',
    cost: '29'
  }, {
    company: 'ResMed',
    name: 'ResMed S9 Auto/CPAP',
    photo: '../../content/images/machines/resmed-s9-auto-cpap.jpg',
    cost: '29'
  }, {
    company: 'Philips',
    name: 'Philips Respironics System One Auto',
    photo: '../../content/images/machines/philips-respironics-system-one-auto.jpg',
    cost: '29'
  }, {
    company: 'Philips',
    name: 'Philips Respironics DreamStation BiPAP',
    photo: '../../content/images/machines/philips-respironics-dreamstation-bipap.jpg',
    cost: '75'
  }];
