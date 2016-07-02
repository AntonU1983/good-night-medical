//var landingApp = angular.module('landingApp', []);
//var catalogApp = angular.module('catalogApp', ['rzModule']);

(function () {
    'use strict';

    var app = angular.module('landingApp', [
        'dataServiceModule'
    ]);

    app.constant('globalConstants', {
        //apiUrl: "http://localhost:51925/",
        apiUrl: "http://goodnight-medical-demo.azurewebsites.net/",
        landingId: "gk1"
    });
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

    app.constant('globalConstants', {
        apiUrl: "http://localhost:51925/",
        //apiUrl: "http://goodnight-medical-demo.azurewebsites.net/",
        landingId: "gk1"
    });

    // Handle routing errors and success events
    app.run([function () {
        // Include $route to kick start the router.
    }]);
})();
