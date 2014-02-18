<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>ElasticSearch</title>
    <meta name="layout" content="main">
    <r:require module="article"/>
</head>

<body>
<div ng-controller="articleCtl" class="cubecontainer" ng-init="x = 0;y=0; z=0;">
    <input type="range" min="0" max="360" step="1" ng-model="x" />
    <input type="range" min="0" max="360" step="1" ng-model="y" />
    <input type="range" min="0" max="360" step="1" ng-model="z" />
    <div class="perspective">
        <div class="cube" style="transform: rotateX({{x}}deg) rotateY({{y}}deg) rotateZ({{z}}deg)">
            <div id="new-article" class="front">
                <h2>Add new articles</h2>

                <!--div>
                    <p>{{messages}}</p>

                    <div><input type="text" ng-model="headline"></div>

                    <div><textarea ng-model="text"></textarea></div>
                    <button ng-click="sendArticle()">Speichern</button>
                </div -->
            </div>

            <div id="articlelist" class="back">
                <h2>Show articles list</h2>
                <button ng-click="findArticles()">Update</button>
                <ul class="articles">
                    <li ng-repeat="article in articles"><a href="#"
                                                           data-ng-click="showArticle(article.id)">{{article.headline}}</a>
                    </li>
                </ul>
            </div>

            <div id="article-container" class="top">
                <div id="article-container-navigation">
                    <button id="close-article-container" ng-click="closeArticle()">X</button>
                </div>

                <div id="article-container-text">
                    <h2>{{currentArticle.headline}}</h2>

                    <p ng-repeat="paragraph in currentArticle.text">{{paragraph}}</p>
                </div>
            </div>

            <div class="bottom"></div>

            <div class="right"></div>

            <div class="left"></div>

        </div>
    </div>
</div>

</body>
</html>