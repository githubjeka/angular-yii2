app
    .controller('SiteLogin', ['$scope', 'rest', 'toaster','$cookies', function ($scope, rest, toaster, $cookies) {

        rest.url = '/test/yii2/rest/user/login';

        var errorCallback = function (data) {
            toaster.clear();
            angular.forEach(data, function (error) {
                toaster.pop('error', "Field: " + error.field, error.message);
            });
        };

        $scope.login = function () {
            rest.postModel($scope.model).success(function (data) {
                rest.config.headers.Authorization = 'Basic ' + data;
                $cookies._auth = data;
            }).error(errorCallback);

            console.log(rest);
        }

    }]);