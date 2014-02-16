var articleCtl = function ($scope, $http) {
    "use strict";

    var ELASTICSEARCH_BASE_URL = 'http://localhost:9200';

    $scope.articles = [];
    $scope.currentArticle;

    $scope.sendArticle = function () {
        console.log("Preparing to send article with headline " + $scope.headline);

        var document = { headline: $scope.headline, text: $scope.text };
        $http.post(
                ELASTICSEARCH_BASE_URL + "/documents/article/",
                JSON.stringify(document)
            ).success(function (data, status, headers, config) {
                $scope.messages = "Your article has been successfully saved. (" + data._id + ")";
            });
    }

    $scope.findArticles = function () {
        $http.get(
                ELASTICSEARCH_BASE_URL + "/documents/article/_search?q=_exists_:headline"
            ).success(function (data, status, headers, config) {
                $scope.articles = [];
                var resultList = data.hits.hits;

                for (var i=0; i < resultList.length; i++) {
                    var currentObject = resultList[i]._source;
                    currentObject.id = resultList[i]._id;
                    $scope.articles.push(currentObject);
                }
            });
    };

    $scope.showArticle = function (articleId) {
      console.log("Show article "+ articleId);
      for (var i = 0; i < $scope.articles.length; i++) {
          if ($scope.articles[i].id == articleId) {
              $scope.currentArticle = $scope.articles[i];
              return;
          }
      }
      $scope.currentArticle = undefined;
    };

    $scope.findArticles();

};
