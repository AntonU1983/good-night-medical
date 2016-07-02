
var serviceId = 'dataService';
angular.module('dataServiceModule', []).factory(serviceId, ['$http', dataService]);

function dataService($http) {

    // Change with appropriate url
    //var urlBase = "http://goodnight-medical-demo.azurewebsites.net/";
    var urlBase = "http://localhost:51925/";

    var service = {
        getMachines: getMachines,
        postContact : postContact,
        postRent: postRent
    };

    return service;

    function getMachines() {
        var subUrl = 'api/Machines';
        return $http.get(urlBase + subUrl);
    }

    function postContact(data) {
        var subUrl = 'api/customer/';
        return $http.post(urlBase + subUrl, data);
    }

    function postRent(data) {
        var subUrl = 'api/customer/rent';
        return $http.post(urlBase + subUrl, data);
    }
}
