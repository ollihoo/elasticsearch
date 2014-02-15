<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>ElasticSearch</title>
    <meta name="layout" content="main">
    <r:require module="article" />
</head>

<body>
<div ng-controller="articleCtl">
    <p>{{messages}}</p>
    <input type="text" ng-model="headline">
    <textarea ng-model="text"></textarea>
    <button ng-click="sendArticle()">Speichern</button>

    <div>
        <h2>{{headline}}</h2>
        <p>{{text}}</p>
    </div>
</div>
</body>
</html>