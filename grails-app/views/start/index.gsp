<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>ElasticSearch</title>
    <meta name="layout" content="main">
    <r:require module="article"/>
</head>

<body>
<div ng-controller="articleCtl">
    <div>
        <h2>Add new articles</h2>

        <p>{{messages}}</p>
        <input type="text" ng-model="headline">
        <textarea ng-model="text"></textarea>
        <button ng-click="sendArticle()">Speichern</button>

    </div>
    <div>
        <h2>Show articles list</h2>
        <button ng-click="findArticles()">Update</button>
        <ul class="articles">
            <li ng-repeat="article in articles"><a href="#" data-ng-click="showArticle(article.id)">{{article.headline}}</a></li>
        </ul>
    </div>

    <div id="article-container">
        <h2>{{currentArticle.headline}}</h2>

        <p>{{currentArticle.text}}</p>
    </div>

</div>

</body>
</html>