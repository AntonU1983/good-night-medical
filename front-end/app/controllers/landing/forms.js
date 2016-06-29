(function() {
    'use strict';

    var controllerId = 'forms';
    angular.module('catalogApp').controller(controllerId, ['dataService', formsController]);

    function formsController(dataService)
    {
        var vm = this;
        vm.data = [];
    }
})();
