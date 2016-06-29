(function() {
    'use strict';

    var controllerId = 'rental';
    angular.module('landingApp').controller(controllerId, ['dataService', formsController]);
    
    function formsController(dataService)
    {
        var vm = this;
        vm.rent = {
            fullName: "",
            email: "",
            phone: "",
            prescription: "No",
            contact: "Email",
            comments: ""
        };

        vm.hiddenModal = true;
        vm.fieldsValidOne = true;
        vm.fieldsValidTwo = true;

        vm.returnHeight = function() {
            return { height: window.innerHeight + 40 + 'px' };
        };
        
        vm.submitForm = function(currentForm, contact) {
            if(currentForm.$valid) {
                dataService.postContact(contact)
                    .success(function (){
                        currentForm.$setPristine();
                        vm.contact = {};
                        vm.contact2 = {};
                    });
            }else {
                return;
            }
        };
        
        vm.submitRental = function(rentalForm) {
            if(rentalForm.$valid) {
                dataService.postRent(vm.rent)
                    .success(function (){
                        rentalForm.$setPristine();
                        vm.rent = {
                            fullName: "",
                            email: "",
                            phone: "",
                            prescription: "No",
                            contact: "Email",
                            comments: ""
                        };
                    });
            }else {
                return;
            }
        };
    }
})();
