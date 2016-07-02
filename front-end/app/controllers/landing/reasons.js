(function() {
    'use strict';

    var controllerId = 'reasons';
    angular.module('landingApp').controller(controllerId, ['$scope', 'dataService', formsController]);

    function formsController($scope, dataService) {
        $scope.content = content;
    }

    var content = {
        Title1: "Check Out Our Rental Program",
        Description1: "We are pleased to offer the lowest cost CPAP/BIPAP rental program on the market, specially designed for those who don’t want to outright buy a machine. Whether you don’t have insurance coverage, have a high deductible, or are simply looking for a second machine, Good Night Medical’s rental program is for you!",
        Title2: "Automatic Resupply Program for Your Convenience",
        Description2: "Our Automatic Re­Supply program will take your mind off the details while keeping you freshly stocked with replacement supplies delivered directly to your door. All you have to do is fill out a simple form and we will send you fresh supplies every 90 days (or as your insurance allows). We will also contact you via email or phone call, 7­10 business days before your orders ships to let you know your supplies are coming. If your insurance or doctor has changed or you just need to make a last minute adjustment, you can call or email us at info@goodnightmedical.com"
    };

})();
