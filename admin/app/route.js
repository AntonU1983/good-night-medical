var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            templateUrl: 'views/main.html',
            abstract: true
    }).state('main.dashboard', {
        templateUrl: 'views/dashboard.html'
    }).state('main.contactus', {
            templateUrl: 'views/data-contact-us-msg.html'
    }).state('main.rent', {
        templateUrl: 'views/data-rent-msg.html'
    }).state('main.pick', {
        templateUrl: 'views/data-help-msg.html'
    }).state('main.machine', {
        templateUrl: 'views/machine.html'
    }).state('login' , {
            templateUrl: 'views/login.html'
    })
});

app.run(['$state','authService', function ($state, authService) {
    authService.fillAuthData();

    if(authService.authentication.isAuth === true)
        $state.go('main.contactus');
    else
        $state.go('login');
}]);