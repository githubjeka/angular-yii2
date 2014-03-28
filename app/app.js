var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ngSanitize', 'mgcrea.ngStrap']);

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {

    var modulesPath = 'modules';

    $routeProvider

        .when('/', {
            templateUrl: modulesPath + '/site/views/main.html'
        })

        .when('/login', {
            templateUrl: modulesPath + '/site/views/login.html',
            controller: 'SiteLogin'
        })
        .when('/logout', {
            templateUrl: modulesPath + '/site/views/main.html',
            controller: 'SiteLogout'
        })

        .when('/post', {
            templateUrl: modulesPath + '/post/views/index.html',
            controller: 'PostIndex'
        })

        .when('/post/create', {
            templateUrl: modulesPath + '/post/views/form.html',
            controller: 'PostCreate'
        })

        .when('/post/:id/edit', {
            templateUrl: modulesPath + '/post/views/form.html',
            controller: 'PostEdit'
        })

        .when('/post/:id/delete', {
            templateUrl: modulesPath + '/post/views/delete.html',
            controller: 'PostDelete'
        })

        .when('/post/:id', {
            templateUrl: modulesPath + '/post/views/view.html',
            controller: 'PostView'
        })

        .when('/404', {
            templateUrl: '404.html'
        })

        .otherwise({ redirectTo: '/404' })
    ;

    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');
}]);

app.factory('authInterceptor', function ($q, $window) {
    return {
        request: function (config) {
            if ($window.sessionStorage._auth) {
                config.headers.Authorization = 'Basic ' + $window.sessionStorage._auth;
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                $window.location = 'login';
            }
            return $q.reject(rejection);
        }
    };
});

app.value('app-version', '0.1');

// Need set url REST Api in controller!
app.service('rest', function ($http, $location, $routeParams) {

    return {

        url: undefined,

        models: function () {
            return $http.get(this.url + location.search);
        },

        model: function () {
            return $http.get(this.url + "/" + $routeParams.id + "?expand=comments");
        },

        get: function () {
            return $http.get(this.url);
        },

        postModel: function (model) {
            return $http.post(this.url, model);
        },

        putModel: function (model) {
            return $http.put(this.url + "/" + $routeParams.id, model);
        },

        deleteModel: function (model) {
            return $http.delete(this.url + "/" + $routeParams.id, model);
        }
    };

});

app.directive('login', ['$http', function ($http) {
    return {
        transclude: true,
        link: function (scope, element, attrs) {
            if (window.sessionStorage._auth != undefined) {
                $http.get('http://rest-yii2.herokuapp.com/user').success(
                    function (data) {
                        scope.username = data[0].username;
                    }
                );
            }
        },

        template: '<a href="login" ng-if="!username">Login</a><a href="logout" ng-if="username">Logout ({{username}})</a>'
    }
}]);
