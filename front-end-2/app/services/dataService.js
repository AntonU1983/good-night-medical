var serviceId = 'dataService';
angular.module('dataServiceModule', []).factory(serviceId, ['$http', dataService]);

function dataService($http) {

    // Change with appropriate url
    //var urlBase = "http://localhost:51925/";
    var urlBase = "http://goodnight-medical-demo.azurewebsites.net/";

    var service = {
        getMachines: getMachines,
        getCatalog: getCatalog,
        getMachinesByType: getMachinesByType,
        getContacts: getContacts,
        postContact : postContact,
        postRent: postRent,
        setReadContact: setReadContact,
        getRents: getRents,
        setReadRent: setReadRent,
        submitRent: submitRent,
        sendPayment: sendPayment

    };

    return service;

    function getCatalog() {
        var subUrl = 'api/machines/catalog';
        return $http.get(urlBase + subUrl);
    }

    function getMachines() {
        var subUrl = 'api/Machines';
        return $http.get(urlBase + subUrl);
    }
    function getMachinesByType(type){
        var subUrl = 'api/machines?type=';
        return $http.get(urlBase + subUrl + type);
    }
    function getMachine(id) {
        var subUrl = 'api/Machines/';
        return $http.get(urlBase + subUrl + id);
    }

    function getRents() {
        var subUrl = 'api/Machines/rents';
        return $http.get(urlBase + subUrl);
    }
    function submitRent(data){
        var subUrl = 'api/customer/rent';
        return $http.post(urlBase + subUrl, data);
    }
    function setReadRent(id) {
        var subUrl = 'api/customer/seen/';
        return $http.get(urlBase + subUrl + id);
    }

    function getContacts() {
        var subUrl = 'api/customer/';
        return $http.get(urlBase + subUrl);
    }

    function setReadContact(id) {
        var subUrl = 'api/customer/seen/';
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
  
    function sendPayment(data) {
      var subUrl = 'api/payment/';
      return $http.post(urlBase + subUrl, data);
    }
}
