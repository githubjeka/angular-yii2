var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', ]);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    var modulesPath = 'modules';

    $routeProvider

        .when('/', {
            templateUrl: modulesPath + '/site/views/main.html'
        })

        .when('/post', {
            templateUrl: modulesPath + '/post/index.html',
            controller: 'PostIndex'
        })

        .when('/post/:id', {
            templateUrl: modulesPath + '/post/view.html',
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

var url = '/test/yii2/rest/post';

app.service('rest', function ($http, $location, $routeParams) {

    return {

        models: function () {
            return $http.get(url + location.search);
        },

        model: function () {
            return $http.get(url + "/" + $routeParams.id + "?expand=comments");
        },

        deleteModel: function (person) {
            return $http.delete(url + person.Id);
        },
        updateModel: function (person) {
            return $http.put(url + person.Id, person);
        }
    };
});
