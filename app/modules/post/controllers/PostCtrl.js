app
    .controller('PostIndex', ['$scope', 'rest', 'toaster', function ($scope, rest, toaster) {

        rest.url = '/test/yii2/rest/post';

        var errorCallback = function (data) {
            toaster.clear();
            toaster.pop('error', "status: " + data.status + " " + data.name, data.message);
        };

        rest.models().success(function (data) {
            $scope.posts = data;
        }).error(errorCallback);

    }])

    .controller('PostView', ['$scope', 'rest', 'toaster', function ($scope, rest, toaster) {

        rest.url = '/test/yii2/rest/post';

        var errorCallback = function (data) {
            toaster.pop('error', "code: " + data.code + " " + data.name, data.message);
        };

        rest.model().success(function (data) {
            $scope.post = data;
        }).error(errorCallback);

    }])

    .controller('PostCreate', ['$scope', 'rest', 'toaster', '$sce', function ($scope, rest, toaster, $sce) {

        rest.url = '/test/yii2/rest/post';

        $scope.post = {};

        $scope.icons = [
            {value: '1', label: 'Draft'},
            {value: '2', label: 'Published'},
            {value: '3', label: 'Archived'}
        ];

        var errorCallback = function (data) {
            toaster.clear();
            angular.forEach(data, function (error) {
                toaster.pop('error', "Field: " + error.field, error.message);
            });
        };

        $scope.save = function () {
            rest.postModel($scope.post).success(function (data) {

            }).error(errorCallback);
        };

        $scope.viewContent = function () {
            return $sce.trustAsHtml($scope.post.content);
        }

    }]);