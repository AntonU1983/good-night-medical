var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        abstract: true
    }).state('main.dashboard', {
        url: 'dashboard',
        templateUrl: 'views/dashboard.html'
    }).state('main.contactus', {
        url: 'contacts',
        templateUrl: 'views/data-contact-us-msg.html',
        controller: 'ContactUs'
    }).state('main.rent', {
        url: 'rents',
        templateUrl: 'views/data-rent-msg.html'
    }).state('main.pick', {
        url: 'helps',
        templateUrl: 'views/data-help-msg.html'
    }).state('main.machine', {
        url: 'machines',
        templateUrl: 'views/machine/machine.html'
    }).state('main.machineAdd', {
        url: '/add',
        templateUrl: 'views/machine/addOrEdit.html',
        controller: 'machine'
    }).state('main.machineEdit', {
      url: '/edit/:id',
      templateUrl: 'views/machine/addOrEdit.html',
      controller: 'machine'
    })
      .state('login' , {
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