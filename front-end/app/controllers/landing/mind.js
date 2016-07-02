(function() {
    'use strict';

    var controllerId = 'mind';
    angular.module('landingApp').controller(controllerId, ['$scope', 'dataService', formsController]);

    function formsController($scope, dataService) {
        $scope.content = content;
    }

    var content = {
        Title: "Think You or Your Spouse has Sleep Apnea?",
        Description: "Enter your contact information below and receive details on our convenient home sleep testing.",
        Description2: "It’s simple, easy, and sent directly to your door!"
    };

})();
