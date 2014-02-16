modules = {
    angular {
        resource url:'js/angular.min.js', disposition: 'head'
    }

    article {
        dependsOn 'angular'

        resource url: 'js/articleCtl.js'
        resource url: 'css/article.css'
    }
}