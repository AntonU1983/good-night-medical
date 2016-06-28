(function () {
    'use strict';

    var serviceId = 'dataService';
    angular.module('catalogApp').factory(serviceId, ['$http', dataService]);

    function dataService($http) {

        // Change with appropriate url
        var urlBase = "http://goodnight-medical-demo.azurewebsites.net/api/Machines";

        var service = {
            getMachines: getMachines
        };

        return service;

        function getMachines() {
            return $http.get(urlBase);;
        }
    }
})();
