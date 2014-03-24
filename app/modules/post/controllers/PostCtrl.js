app
    .controller('PostIndex', ['$scope', 'rest', 'toaster', function ($scope, rest, toaster) {
        var errorCallback = function (data) {
            toaster.pop('error', "code: " + data.code + " " + data.name, data.message);
        };

        rest.models().success(function (data) {
            $scope.posts = data;
        }).error(errorCallback);

    }])
    .controller('PostView', ['$scope', 'rest', 'toaster', function ($scope, rest, toaster) {

        var errorCallback = function (data) {
            toaster.pop('error', "code: " + data.code + " " + data.name, data.message);
        };

        rest.model().success(function (data) {
            $scope.post = data;
        }).error(errorCallback);

    }]);