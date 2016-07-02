(function() {
    'use strict';

    var controllerId = 'process';
    angular.module('landingApp').controller(controllerId, ['$scope', 'dataService', formsController]);

    function formsController($scope, dataService) {
        $scope.content = content;
    }

    var content = {
        Title: "Three Simple Steps to a Better Sleeping You",
        Step1: {
            Title: "Enter your email below",
            Description: "We will we send you a PDF-form to your email or ask for a Home Sleep Test Order form to be mailed to you"
        },
        Step2: {
            Title: "Print the form",
            Description: "Fill out the patient information section either electronically or once printed.  The rest of the form will be completed by your doctor.  Be sure to get the signature at the bottom!"
        },
        Step3: {
            Title: "Receive your sleep device",
            Description: "We will send you a home sleep test that you will wear for three nights.  A home sleep test specialist will call you throughout your test to see if you need any assistance"
        }
    };

})();
