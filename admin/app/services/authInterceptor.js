(function () {
  'use strict';
  var app = angular.module('app');

  var factoryId = 'authInterceptor';
  app.factory(factoryId, ['$rootScope', '$q', '$window','authService', authInterceptor]);

  function authInterceptor($rootScope, $q, $window, authService) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if (authService.authentication.isAuth) {
          config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        
        return config;
      },
      responseError: function (rejection) {
        console.log(rejection);
        var msg = rejection.data + ': ' + rejection.config.url;
        toastr.error(msg);
        if (rejection.status === 401) {
          // handle the case where the user is not authenticated
        }
        return $q.reject(rejection);
      }
    }
  }

  /*app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });*/
  
})();