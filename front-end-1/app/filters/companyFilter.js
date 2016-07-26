(function () {
    'use strict';

    var filterId = 'companyFilter';
    angular.module('catalogApp').filter(filterId, function() {

        return function(items, includedCompanies) {
            var filtered = [];

            if(includedCompanies.length > 0) {
                angular.forEach(items, function(item) {
                    if ($.inArray(item.company.name, includedCompanies) < 0)
                        return;
                    else {
                        filtered.push(item);
                    }
                });
                return filtered;
            }else {
                return items;
            }
        };
    });
})();