var serviceId = 'dataService';
angular.module('dataServiceModule', []).factory(serviceId, ['$http', 'globalConstants', dataService]);

function dataService($http, globalConstants) {

    var urlBase = globalConstants.apiUrl;

    var service = {
        getMachines: getMachines,
        getMachineId: getMachineId,
        getContacts: getContacts,
        postContact : postContact,
        postMachine : postMachine,
        putMachine: putMachine,
        postRent: postRent,
        setReadContact: setReadContact,
        getRents: getRents,
        getRentId: getRentId,
        setReadRent: setReadRent
    };

    return service;

    function getMachines() {
        var subUrl = 'admin/machines';
        return $http.get(urlBase + subUrl);
    }

    function getMachineId(id) {
        var subUrl = 'admin/machines/';
        return $http.get(urlBase + subUrl + id);
    }

    function postMachine(model) {
      var subUrl = 'admin/machines/';
      return $http.post(urlBase + subUrl, model);
    }

    function putMachine(id, model) {
      var subUrl = 'admin/machines/';
      return $http.put(urlBase + subUrl + id, model);
    }

    function getRents() {
        var subUrl = 'admin/rents';
        return $http.get(urlBase + subUrl);
    }

    function getRentId(id) {
      var subUrl = 'admin/rents/';
      return $http.get(urlBase + subUrl + id);
    }

    function setReadRent(id) {
        var subUrl = 'admin/rents/' + id;
        return $http.put(urlBase + subUrl + '/read');
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

    function post(url, data) {
        data.landingId = globalConstants.landingId;
        return post(url, data);
    }
}
