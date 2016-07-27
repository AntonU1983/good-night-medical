(function() {
  'use strict';

  var controllerId = 'FormCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {

    $scope.errorMsg = errorMsg;
    $scope.months = months;
    $scope.days = days;
    $scope.years = years;

    // Показывает или Скрывает меню с сообщениями ошибок
    $scope.dataErrorMsg = function(){
      if (($scope.form.fullName.$touched && $scope.form.fullName.$invalid) ||
          ($scope.form.lastName.$touched && $scope.form.lastName.$invalid) ||
          ($scope.form.emailAddress.$touched && $scope.form.emailAddress.$invalid) ||
          ($scope.form.phoneNumber.$touched && $scope.form.phoneNumber.$invalid) ||
          ($scope.form.monthSelect.$touched && $scope.form.monthSelect.$invalid) ||
          ($scope.form.daySelect.$touched && $scope.form.daySelect.$invalid) ||
          ($scope.form.yearSelect.$touched && $scope.form.yearSelect.$invalid) ||
          ($scope.formInvalid && $scope.form.fullName.$invalid) ||
          ($scope.formInvalid && $scope.form.lastName.$invalid) ||
          ($scope.formInvalid && $scope.form.emailAddress.$invalid) ||
          ($scope.formInvalid && $scope.form.phoneNumber.$invalid) ||
          ($scope.formInvalid && $scope.form.monthSelect.$invalid) ||
          ($scope.formInvalid && $scope.form.daySelect.$invalid) ||
          ($scope.formInvalid && $scope.form.yearSelect.$invalid))
        {return true;}
    };

    // Показывает или скрывает сообщения с ошибками
    $scope.showErrorMsg = function(touched, invalid){
      if ((touched && invalid) || (invalid && $scope.formInvalid))
        {return true;}
    };

    // Возращает стиль элементу который не прошел валидацию
    $scope.returnClass = function(touched, invalid, cssClass){
      if ((touched && invalid) || (invalid && $scope.formInvalid))
        {return cssClass;}
    };

    // Отправляет данные, если все поля заполнены верно (функция вызывается с помощью ng-submit)
    $scope.submitData = function(){
      if ($scope.form.$invalid) {
        $scope.formInvalid = true;
      }
      else {
        // Здесь должна быть функция отправки данных
        // Все ng-model данных в форме
        //
        // Данные пользователя
        // $scope.FullName        - Имя
        // $scope.LastName        - Фамилия
        // $scope.EmailAddress    - Почтовый Адрес (электронный)
        // $scope.PhoneNumber     - Номер Телефона
        // $scope.currentPatient1 - yes (radio btn)
        // $scope.currentPatient2 - no (radio btn)
        // $scope.Month           - Месяц рождения
        // $scope.Day             - День рождения
        // $scope.Year            - Год рождения
        //
        // Offer Code
        // $scope.OfferCode    - Опционален, проверки на правильность пока нету
      }
    };

  }

  var errorMsg = {
    FullName: 'Full Name error message',
    LastName: 'Last Name error message',
    EmailAddress: 'Email Address error message',
    PhoneNumber: 'Phone Number error message',
    Month: 'Month error message',
    Day: 'Day error message',
    Year: 'Year error message',
    OfferCode: 'Offer Code error message'
  };

  // Месяца рождения
  var months = [
    '01 January',
    '02 February',
    '03 March',
    '04 April',
    '05 May',
    '06 June',
    '07 July',
    '08 August',
    '09 September',
    '10 October',
    '11 November',
    '12 December'
  ];

  // Дни рождения
  var days = [];

  // Пушим дни в массив days
  for (var i = 1; i <= 31; i++) {days.push(i);}

  // Год рождения (нынешний и еще 120 годов назад)
  var years  = [];

  // Вычисляем какой сейчас год
  var currentYear = new Date().getFullYear();

  // Пушим года в массив years
  for (var i = 0; i <= 120; i++) {years.push(currentYear - i);}

})();























