(function () {
    'use strict';

    var filterId = 'priceFilter';
    angular.module('catalogApp').filter(filterId, function() {

        return function( items, rangeInfo ) {
        var filtered = [];
            
        var min = parseInt(rangeInfo.minValue);
        var max = parseInt(rangeInfo.maxValue);
            
        angular.forEach(items, function(item) {
            if(item.pricePerMonth >= min && item.pricePerMonth <= max ) {
                filtered.push(item);
            }
        });
            
        return filtered;
    };
});
})();