//var landingApp = angular.module('landingApp', []);
//var catalogApp = angular.module('catalogApp', ['rzModule']);

(function () {
    'use strict';

    var app = angular.module('landingApp', [
        'dataServiceModule'
    ]);

    // Handle routing errors and success events
    app.run([function () {
        // Include $route to kick start the router.
    }]);
})();


(function () {
    'use strict';

    var app = angular.module('catalogApp', [
        'dataServiceModule',
        'rzModule'
    ]);

    // Handle routing errors and success events
    app.run([function () {
        // Include $route to kick start the router.
    }]);
})();
