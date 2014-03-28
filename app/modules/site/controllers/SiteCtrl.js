app
    .controller('SiteLogin', ['$scope', 'rest', 'toaster', '$window', function ($scope, rest, toaster, $window) {

        rest.url = 'https://rest-yii2.herokuapp.com/user/login';

        var errorCallback = function (data) {
            toaster.clear();
            delete $window.sessionStorage._auth;
            angular.forEach(data, function (error) {
                toaster.pop('error', "Field: " + error.field, error.message);
            });
        };

        $scope.login = function () {
            rest.postModel($scope.model).success(function (data) {
                $window.sessionStorage._auth = data;
                toaster.pop('success', "Success");
                window.setTimeout(function () {
                    document.location = '';
                }, 1000);
            }).error(errorCallback);
        };

        rest.postModel($scope.model).success(function (data) {
            $window.sessionStorage._auth = data;
            document.location = '';
        });
    }])
    .controller('SiteLogout', ['$scope', 'rest', '$window', function ($scope, rest, $window) {

        rest.url = 'http://rest-yii2.herokuapp.com/user/logout';

        var errorCallback = function (data) {
            console.log(data);
        };

        rest.get().success(function () {
            delete $window.sessionStorage._auth;
            document.location = '';
        }).error(errorCallback);


    }]);