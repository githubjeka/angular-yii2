app
    .controller('SiteLogin', ['$scope', 'rest', 'toaster', '$window', function ($scope, rest, toaster, $window) {

        rest.url = '/test/yii2/rest/user/login';

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
            }).error(errorCallback);
        }

    }]);