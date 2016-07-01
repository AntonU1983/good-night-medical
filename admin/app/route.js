var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
        templateUrl: 'views/main.html'
    }).state('login' , {
        templateUrl: 'views/login.html'
    })
});

app.run(['$state','authService', function ($state, authService) {
    if(authService.authentication.isAuth === true)
        $state.go('main');
    else
        $state.go('login');
}]);