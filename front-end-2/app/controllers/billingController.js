var billingPageApp = angular.module('billingPageApp', []);

billingPageApp.controller('billingPageCtrl', function($scope){

  // Сообщения ошибок для Shipping Infromation
  $scope.errorShipFullNameMsg = 'Full Name error message';
  $scope.errorShipLastNameMsg = 'Last Name error message';
  $scope.errorShipAddressMsg  = 'Address Line 1 error message';
  $scope.errorShipCityMsg     = 'City error message';
  $scope.errorShipStateMsg    = 'State error message';
  $scope.errorShipZipMsg      = 'Zip error message';

  // Сообщения ошибок для Billing Card Information
  $scope.errorBillCardNumberMsg = 'Credit Card Number error message';
  $scope.errorBillMonthMsg      = 'Month error message';
  $scope.errorBillYearMsg       = 'Year error message';
  $scope.errorBillCvvMsg        = 'CVV error message';

  // Сообщения ошибок для Billing Shipping Information
  $scope.errorBillFullNameMsg = 'Full Name error message';
  $scope.errorBillLastNameMsg = 'Last Name error message';
  $scope.errorBillAddressMsg  = 'Address Line 1 error message';
  $scope.errorBillCityMsg     = 'City error message';
  $scope.errorBillStateMsg    = 'State error message';
  $scope.errorBillZipMsg      = 'Zip error message';

  // Сообщения ошибок для Promo Code
  $scope.errorPromoCodeMsg = 'Promo Code error message';

  // Переменные для общей области видимости, которые хранят важные данные
  $scope.states = americanState;
  $scope.months = availableMonth;
  $scope.years  = availableYear;
  $scope.checkboxModel = true;
  $scope.formInvalid = false;

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

  // Скрывает или Показывает меню с сообщениями ошибок (Billing Shipping Information)
  $scope.promoCodeErrorMsg = function(){
    if ($scope.billData.promoCode.$touched && $scope.billData.promoCode.$invalid) {return true;}
  };

  // Показывает или скрывает сообщения с ошибками
  $scope.showErrorMsg = function(touched, invalid){
    if ((touched && invalid) || (invalid && $scope.formInvalid)) {return true;}
  };

  // Возращает элементу который не прошел валидацию стиль
  $scope.returnClass = function(touched, invalid, cssClass){
    if ((touched && invalid) || (invalid && $scope.formInvalid)) {return cssClass;}
  };

  // Отправляет данные, если все поля заполнены верно
  $scope.submitPurchase = function(){
    if ($scope.billData.$invalid) {$scope.formInvalid = true;}
  };

})

// Возможные месяца для карточки
var availableMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
// Возможные года для карточки (нынешний + 20 вперед)
var availableYear  = [];

// Вычисляем какой сейчас год
var currentYear = new Date().getFullYear();
// Пушим наши года в Drop Down
for (var i = 0; i <= 20; i++) {availableYear.push(currentYear + i);}
 
// Американские Штаты (50)
var americanState = [
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
  {"name": "Wyoming"}];
