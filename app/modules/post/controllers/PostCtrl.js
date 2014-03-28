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
            if (data.status == undefined) {
                angular.forEach(data, function (error) {
                    toaster.pop('error', "Field: " + error.field, error.message);
                });
            } else {
                toaster.pop('error', "status: " + data.status + " " + data.name, data.message);
            }
        };

        $scope.save = function () {
            rest.postModel($scope.post).success(function (data) {

                toaster.pop('success', "Saved");

                window.setTimeout(function () {
                    document.location = 'post/' + data.id;
                }, 1000);

            }).error(errorCallback);
        };

        $scope.viewContent = function () {
            return $sce.trustAsHtml($scope.post.content);
        }

    }])

    .controller('PostEdit', ['$scope', 'rest', 'toaster', '$sce', function ($scope, rest, toaster, $sce) {

        var errorCallback = function (data) {
            toaster.clear();
            if (data.status == undefined) {
                angular.forEach(data, function (error) {
                    toaster.pop('error', "Field: " + error.field, error.message);
                });
            } else {
                toaster.pop('error', "status: " + data.status + " " + data.name, data.message);
            }
        };

        rest.url = '/test/yii2/rest/post';

        $scope.post = {};

        $scope.icons = [
            {value: '1', label: 'Draft'},
            {value: '2', label: 'Published'},
            {value: '3', label: 'Archived'}
        ];

        rest.model().success(function (data) {
            $scope.post = data;
            $scope.post.status = $scope.post.status.toString();
        }).error(errorCallback);

        $scope.save = function () {
            rest.putModel($scope.post).success(function () {

                toaster.pop('success', "Saved");

                window.setTimeout(function () {
                    document.location = 'post/' + $scope.post.id;
                }, 1000);

            }).error(errorCallback);
        };

        $scope.viewContent = function () {
            if ($scope.post != undefined)
                return $sce.trustAsHtml($scope.post.content);
        }

    }])

    .controller('PostDelete', ['$scope', 'rest', 'toaster', '$sce', function ($scope, rest, toaster, $sce) {

        var errorCallback = function (data) {
            toaster.clear();
            if (data.status == undefined) {
                angular.forEach(data, function (error) {
                    toaster.pop('error', "Field: " + error.field, error.message);
                });
            } else {
                toaster.pop('error', "status: " + data.status + " " + data.name, data.message);
            }
        };

        rest.url = '/test/yii2/rest/post';

        rest.model().success(function (data) {
            $scope.post = data;
        }).error(errorCallback);

        $scope.delete = function () {
            rest.deleteModel($scope.post).success(function () {

                toaster.pop('success', "Deleted!");

                window.setTimeout(function () {
                    document.location = 'post/';
                }, 1000);

            }).error(errorCallback);
        };

    }]);