var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'toaster', 'ngSanitize', 'mgcrea.ngStrap']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    var modulesPath = 'modules';

    $routeProvider

        .when('/', {
            templateUrl: modulesPath + '/site/views/main.html'
        })

        .when('/login', {
            templateUrl: modulesPath + '/site/views/login.html',
            controller: 'SiteLogin'
        })

        .when('/post', {
            templateUrl: modulesPath + '/post/views/index.html',
            controller: 'PostIndex'
        })

        .when('/post/create', {
            templateUrl: modulesPath + '/post/views/form.html',
            controller: 'PostCreate'
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

}]);

app.value('app-version', '0.1');

// Need set url REST Api in controller!
app.service('rest', function ($http, $location, $routeParams, $cookies) {

    return {

        url: undefined,

        config: {headers: {'Authorization': 'Basic ' + $cookies._auth}},

        models: function () {
            return $http.get(this.url + location.search, this.config);
        },

        model: function () {
            return $http.get(this.url + "/" + $routeParams.id + "?expand=comments", this.config);
        },

        postModel: function (model) {
            return $http.post(this.url, model, this.config);
        },

        updateModel: function (person) {
            return $http.put(url + person.Id, person);
        }
    };

});
