var serviceId = 'dataService';
angular.module('dataServiceModule', []).factory(serviceId, ['$http', 'globalConstants', dataService]);

function dataService($http, globalConstants) {

    // Change with appropriate url
    var urlBase = globalConstants.apiUrl;

    var service = {
        getMachines: getMachines,
        getContacts: getContacts,
        postContact : postContact,
        postRent: postRent,
        setReadContact: setReadContact
    };

    return service;

    function getMachines() {
        var subUrl = 'api/Machines';
        return $http.get(urlBase + subUrl);
    }

    function getContacts() {
        var subUrl = 'api/customer/'
        return $http.get(urlBase + subUrl);
    }

    function setReadContact(id) {
        var subUrl = 'api/customer/seen/'
        return $http.get(urlBase + subUrl + id);
    }

    function postContact(data) {
        var subUrl = 'api/customer/';
        return post(urlBase + subUrl, data);
    }

    function postRent(data) {
        var subUrl = 'api/customer/rent';
        return post(urlBase + subUrl, data);
    }

    function post(url, data) {
        data.landingId = globalConstants.landingId;
        return post(url, data);
    }
}
