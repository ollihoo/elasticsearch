var articleCtl = function ($scope, $http) {

    var ELASTICSEARCH_BASE_URL = 'http://localhost:9200';

    $scope.sendArticle = function () {
        console.log("Preparing to send article with headline " + $scope.headline);

        var document = { headline: $scope.headline, text: $scope.text };
        $http.post(
                ELASTICSEARCH_BASE_URL + "/documents/article/",
                JSON.stringify(document)
            ).success(function (data, status, headers, config) {
                $scope.messages = "Your article has been successfully saved. ("+ data._id +")";
            });
    }

};
