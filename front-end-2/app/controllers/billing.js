(function() {
  'use strict';

  var controllerId = 'BillingCtrl';
  angular.module('app').controller(controllerId, ['$scope','$state','dataService', formsController]);

  function formsController($scope, $state,dataService) {
    $scope.shipData = {};
    
    $scope.states = states;
    $scope.months = months;
    $scope.years  = years;
    
    $scope.sameBillShip = true;
    $scope.formInvalid = false;
    $scope.errorMsg = errorMsg;
    
    $scope.shipData.price = $state.params.price;
    $scope.shipData.ships = $state.params.ships;
    $scope.shipData.type = $state.params.type;
    
    // Показывает или Скрывает меню с сообщениями ошибок (Shipping Information)
    $scope.shipErrorMsg = function(){
      if (($scope.billData.shipFullName.$touched && $scope.billData.shipFullName.$invalid) ||
          ($scope.billData.shipLastName.$touched && $scope.billData.shipLastName.$invalid) ||
          ($scope.billData.shipAddress1.$touched && $scope.billData.shipAddress1.$invalid) ||
          ($scope.billData.shipCity.$touched && $scope.billData.shipCity.$invalid) ||
          ($scope.billData.shipState.$touched && $scope.billData.shipState.$invalid) ||
          ($scope.billData.shipZip.$touched && $scope.billData.shipZip.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipFullName.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipLastName.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipAddress1.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipCity.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipState.$invalid) ||
          ($scope.formInvalid && $scope.billData.shipZip.$invalid)) {return true;}
    };

    // Показывает или Скрывает меню с сообщениями ошибок (Billing Card Information)
    $scope.billCardErrorMsg = function(){
      if (($scope.billData.cardNumber.$touched && $scope.billData.cardNumber.$invalid) ||
          ($scope.billData.cardMonth.$touched && $scope.billData.cardMonth.$invalid) ||
          ($scope.billData.cardYear.$touched && $scope.billData.cardYear.$invalid) ||
          ($scope.billData.cardCvv.$touched && $scope.billData.cardCvv.$invalid) ||
          ($scope.formInvalid && $scope.billData.cardNumber.$invalid) ||
          ($scope.formInvalid && $scope.billData.cardMonth.$invalid) ||
          ($scope.formInvalid && $scope.billData.cardYear.$invalid) ||
          ($scope.formInvalid && $scope.billData.cardCvv.$invalid)) {return true;}
    };

    // Показывает или Скрывает меню с сообщениями ошибок (Billing Shipping Information)
    $scope.billErrorMsg = function(){
      if (($scope.billData.billFullName.$touched && $scope.billData.billFullName.$invalid) ||
          ($scope.billData.billLastName.$touched && $scope.billData.billLastName.$invalid) ||
          ($scope.billData.billAddress1.$touched && $scope.billData.billAddress1.$invalid) ||
          ($scope.billData.billCity.$touched && $scope.billData.billCity.$invalid) ||
          ($scope.billData.billState.$touched && $scope.billData.billState.$invalid) ||
          ($scope.billData.billZip.$touched && $scope.billData.billZip.$invalid) ||
          ($scope.formInvalid && $scope.billData.billFullName.$invalid) ||
          ($scope.formInvalid && $scope.billData.billLastName.$invalid) ||
          ($scope.formInvalid && $scope.billData.billAddress1.$invalid) ||
          ($scope.formInvalid && $scope.billData.billCity.$invalid) ||
          ($scope.formInvalid && $scope.billData.billState.$invalid) ||
          ($scope.formInvalid && $scope.billData.billZip.$invalid)) {return true;}
    };

    // Показывает или скрывает сообщения с ошибками
    $scope.showErrorMsg = function(touched, invalid){
      if ((touched && invalid) || (invalid && $scope.formInvalid)) {return true;}
    };

    // Возращает стиль элементу который не прошел валидацию
    $scope.returnClass = function(touched, invalid, cssClass){
      if ((touched && invalid) || (invalid && $scope.formInvalid)) {return cssClass;}
    };

    // Отправляет данные, если все поля заполнены верно (функция вызывается с помощью ng-submit)
    $scope.submitPurchase = function(){
      if ($scope.billData.$invalid) {
        $scope.formInvalid = true;
      }
      else {
        
        dataService.sendPayment($scope.shipData).success(function (data) {
          $scope.content = data;
          $state.go('catalog');
        });
        // Здесь должна быть функция отправки данных
        // Все ng-model данных в форме
        //
        // Адрес доставки
        // $scope.shipFullName - Имя
        // $scope.shipLastName - Фамилия
        // $scope.shipAddress1 - Адрес первый (обязательный)
        // $scope.shipAddress2 - Адрес второй (опциональный)
        // $scope.shipCity     - Город
        // $scope.shipState    - Штат
        // $scope.shipZip      - Индекс
        //
        // Данные карточки
        // $scope.cardNumber   - Номер
        // $scope.cardMonth    - Месяц
        // $scope.cardYear     - Год
        // $scope.cardCvv      - CVV код
        // $scope.sameBillShip - Если TRUE то платежный адрес такой же как и отправки (данные копируются с адреса доставки), FALSE адрес отличается (другой)
        // $scope.billFullName - Имя
        // $scope.billLastName - Фамилия
        // $scope.billAddress1 - Адрес первый (обязательный)
        // $scope.billAddress2 - Адрес второй (опциональный)
        // $scope.billCity     - Город
        // $scope.billState    - Штат
        // $scope.billZip      - Индекс
        //
        // Промоко код на скидки?
        // $scope.promoCode    - Опционален, проверки на правильность пока нету
      }
    };
  }

  var errorMsg = {
    Ship: {
      FullName: 'Full Name error message',
      LastName: 'Last Name error message',
      Address: 'Address Line 1 error message',
      City: 'City error message',
      State: 'State error message',
      Zip: 'Zip error message'
    },
    Bill: {
      CardNumber: 'Credit Card Number error message',
      Month: 'Month error message',
      Year: 'Year error message',
      CVV: 'CVV error message'
    },
    BillShip: {
      FullName: 'Full Name error message',
      LastName: 'Last Name error message',
      Address: 'Address Line 1 error message',
      City: 'City error message',
      State: 'State error message',
      Zip: 'Zip error message'
    },
    Other: {
      PromoCode: 'Promo Code error message'
    }
  };

  // Возможные месяца для карточки
  var months = [1,2,3,4,5,6,7,8,9,10,11,12];
  // Возможные года для карточки (нынешний + 20 вперед)
  var years  = [];

  // Вычисляем какой сейчас год
  var currentYear = new Date().getFullYear();
  // Пушим наши года в Drop Down
  for (var i = 0; i <= 20; i++) {years.push(currentYear + i);}

  // Американские Штаты (50)
  var states = [
    {"name": "Alabama"},
    {"name": "Alaska"},
    {"name": "Arizona"},
    {"name": "Arkansas"},
    {"name": "California"},
    {"name": "Colorado"},
    {"name": "Connecticut"},
    {"name": "Delaware"},
    {"name": "Florida"},
    {"name": "Georgia"},
    {"name": "Hawaii"},
    {"name": "Idaho"},
    {"name": "Illinois"},
    {"name": "Indiana"},
    {"name": "Iowa"},
    {"name": "Kansas"},
    {"name": "Kentucky"},
    {"name": "Louisiana"},
    {"name": "Maine"},
    {"name": "Maryland"},
    {"name": "Massachusetts"},
    {"name": "Michigan"},
    {"name": "Minnesota"},
    {"name": "Mississippi"},
    {"name": "Missouri"},
    {"name": "Montana"},
    {"name": "Nebraska"},
    {"name": "Nevada"},
    {"name": "New Hampshire"},
    {"name": "New Jersey"},
    {"name": "New Mexico"},
    {"name": "New York"},
    {"name": "North Carolina"},
    {"name": "North Dakota"},
    {"name": "Ohio"},
    {"name": "Oklahoma"},
    {"name": "Oregon"},
    {"name": "Pennsylvania"},
    {"name": "Rhode Island"},
    {"name": "South Carolina"},
    {"name": "South Dakota"},
    {"name": "Tennessee"},
    {"name": "Texas"},
    {"name": "Utah"},
    {"name": "Vermont"},
    {"name": "Virginia"},
    {"name": "Washington"},
    {"name": "West Virginia"},
    {"name": "Wisconsin"},
    {"name": "Wyoming"}
  ];

})();



