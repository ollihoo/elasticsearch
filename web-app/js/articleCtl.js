var articleCtl = function ($scope, $http) {
    "use strict";

    var ELASTICSEARCH_BASE_URL = 'http://localhost:9200';

    var onErrorHandler = function (data, status, headers, config) {
        if (status == 404) {
            console.log("No data found");
        } else {
            console.log("No connection to database");
        }
    };

    $scope.articles = [];
    $scope.currentArticle = {};

    var splitTextInParagraphs = function (input) {
        var originalTexts = input.split("\n");
        var resultTexts = [];
        for (var i = 0; i < originalTexts.length; i++) {
            if (originalTexts[i] != "") {
                resultTexts.push(originalTexts[i]);
            }
        }
        return resultTexts;
    };

    $scope.sendArticle = function () {


        var document = {
            headline: $scope.headline,
            text: splitTextInParagraphs($scope.text)
        };
        $http.post(
                ELASTICSEARCH_BASE_URL + "/documents/article/",
                JSON.stringify(document)
            ).success(function (data, status, headers, config) {
                $scope.messages = "Your article has been successfully saved. (" + data._id + ")";
            }).error(onErrorHandler);
    };

    $scope.findArticles = function () {
        $http.get(
                ELASTICSEARCH_BASE_URL + "/documents/article/_search?q=_exists_:headline"
            ).success(function (data, status, headers, config) {
                $scope.articles = [];
                var resultList = data.hits.hits;

                for (var i = 0; i < resultList.length; i++) {
                    var currentObject = resultList[i]._source;
                    currentObject.id = resultList[i]._id;
                    $scope.articles.push(currentObject);
                }
            }).error(onErrorHandler);
    };

    $scope.showArticle = function (articleId) {
        console.log("Show article " + articleId);
        for (var i = 0; i < $scope.articles.length; i++) {
            if ($scope.articles[i].id == articleId) {
                if (! ($scope.articles[i].text instanceof Array)) {
                    $scope.articles[i].text = splitTextInParagraphs($scope.articles[i].text);
                }
                $scope.currentArticle = $scope.articles[i];

                return;
            }
        }
        $scope.currentArticle = {};
    };

    $scope.closeArticle = function () {
        $scope.currentArticle = {};
    };

    $scope.findArticles();
};
