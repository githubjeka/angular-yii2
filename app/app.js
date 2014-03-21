var app = angular.module('myApp', ['ngRoute', 'ngAnimate',]);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    var modulesPath = 'modules';

    $routeProvider

        .when('/', {
            templateUrl: modulesPath+'/site/views/main.html'
        })

        .when('/individual', {
            templateUrl: 'content.html',
            controller: 'IndividualCtrl'
        })

        .when('/404', {
            templateUrl: '404.html'
        })

        .otherwise({ redirectTo: '/404' })
    ;

    $locationProvider.html5Mode(true).hashPrefix('!');

}]);

app.value('app-version', '0.1');