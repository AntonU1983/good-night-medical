var landingApp = angular.module('landingApp', []);
//var catalogApp = angular.module('catalogApp', ['rzModule']);

(function () {
    'use strict';

    var app = angular.module('catalogApp', [
        'rzModule'
    ]);

    // Handle routing errors and success events
    app.run([function () {
        // Include $route to kick start the router.
    }]);
})();
