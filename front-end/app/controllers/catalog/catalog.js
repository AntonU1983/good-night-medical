(function () {
  'use strict';

  var controllerId = 'catalog';
  angular.module('catalogApp').controller(controllerId, ['dataService', catalogController]);

  function catalogController(dataService) {

    var vm = this;
    vm.data = [];

    vm.init = getData;

    function getData() {
      dataService.getMachines()
          .then(function (response) {
            vm.data = response.data;
          }, function (error) {
            alert('Unable to load data: ' + error.message);
            vm.data = localData;
          });
    }

    vm.slider = {
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
    vm.returnHeight = function() {return {height: window.innerHeight - 130 + 'px'};}

    // Смена стилей для первой пары кнопок фильтрации
    vm.returnClassBtnFilterOne = function(number) {
      if (vm.filterOne == number) {return 'form-btn-active'}
      else  {return 'form-btn-inactive'}
    };

    vm.includedCompanies = [];

    vm.includeCompany = function(company) {
      var i = $.inArray(company,  vm.includedCompanies);
      if (i > -1) {
        vm.includedCompanies.splice(i, 1);
      } else {
        vm.includedCompanies.push(company);
      }
    };
  }
})();


var localData = [
  {
    "name": "ResMed S10 AirSense Auto/Pro",
    "imageUrl": "resmed-s10-airsense-auto-pro.jpg",
    "pricePerMonth": 65,
    "refurbished": false,
    "company": {
      "name": "ResMed",
      "id": "0b4cccad-99fb-4eb9-9e78-27610384b4f7"
    },
    "id": "78d599f7-94da-4460-b311-8d947e593586"
  },
  {
    "name": "ResMed S10 AirSense Auto",
    "imageUrl": "resmed-s10-airsense-auto-pro.jpg",
    "pricePerMonth": 45,
    "refurbished": true,
    "company": {
      "name": "ResMed",
      "id": "0b4cccad-99fb-4eb9-9e78-27610384b4f7"
    },
    "id": "dd19a5ea-ce8e-40b5-a31c-fc32da032f20"
  },
  {
    "name": "Philips Respironics DreamStation Auto/Pro",
    "imageUrl": "philips-respironics-dreamstation-auto-pro.jpg",
    "pricePerMonth": 65,
    "refurbished": false,
    "company": {
      "name": "Philips",
      "id": "7fa0c81d-9930-4175-a036-23061e29361f"
    },
    "id": "4afab07e-a481-4184-bd8e-f04fc91f87dc"
  },
  {
    "name": "Philips Respironics RemStar System One Auto",
    "imageUrl": "philips-respironics-remstar-system-one-auto.jpg",
    "pricePerMonth": 45,
    "refurbished": true,
    "company": {
      "name": "Philips",
      "id": "7fa0c81d-9930-4175-a036-23061e29361f"
    },
    "id": "904e702d-307a-46a5-8486-574900184af9"
  },
  {
    "name": "Fisher & Paykel ICON Premo/Auto",
    "imageUrl": "fisher-and-paykel-icon-premo-auto.jpg",
    "pricePerMonth": 49,
    "refurbished": false,
    "company": {
      "name": "Fisher & Paykel",
      "id": "66abbce6-fca6-434c-8ffe-7db14634b9da"
    },
    "id": "ca227a29-2479-4ad9-8369-2aa149e8a826"
  },
  {
    "name": "Fisher & Paykel ICON Auto",
    "imageUrl": "fisher-and-paykel-icon-auto.jpg",
    "pricePerMonth": 29,
    "refurbished": true,
    "company": {
      "name": "Fisher & Paykel",
      "id": "66abbce6-fca6-434c-8ffe-7db14634b9da"
    },
    "id": "a32aaf35-13b3-4368-b3aa-4e44eeab2a97"
  },
  {
    "name": "ResMed S9 Auto/CPAP",
    "imageUrl": "resmed-s9-auto-cpap.jpg",
    "pricePerMonth": 29,
    "refurbished": true,
    "company": {
      "name": "ResMed",
      "id": "0b4cccad-99fb-4eb9-9e78-27610384b4f7"
    },
    "id": "bd4f5280-ef2b-41f4-95b0-5815d1c93df3"
  },
  {
    "name": "Philips Respironics System One Auto",
    "imageUrl": "philips-respironics-system-one-auto.jpg",
    "pricePerMonth": 29,
    "refurbished": true,
    "company": {
      "name": "Philips",
      "id": "7fa0c81d-9930-4175-a036-23061e29361f"
    },
    "id": "15100e8c-128b-4bc7-be50-a56e3903908a"
  },
  {
    "name": "Philips Respironics DreamStation BiPAP",
    "imageUrl": "philips-respironics-dreamstation-bipap.jpg",
    "pricePerMonth": 75,
    "refurbished": false,
    "company": {
      "name": "Philips",
      "id": "7fa0c81d-9930-4175-a036-23061e29361f"
    },
    "id": "3102ef66-dd4d-453e-a6bc-c0749ebd294b"
  }
];
