angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'app/posts/postsTemplate.html',
            controller: 'postsController',
            resolve: {
                posts: function (postsService) { 
                    return postsService.getAll();
                }
            }
        })
        .state('/chi-siamo', {
            url: '/chi-siamo',
            template: '<h1>Pagina chi siamo</h1>'
        })

})