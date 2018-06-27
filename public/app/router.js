angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('loggato', {
            url: '/',
            abstract: true,
            templateUrl: 'main.html',
            
        })
        .state('loggato.home', {
            url: 'home',
            templateUrl: 'app/posts/postsTemplate.html',
            controller: 'postsController',
            resolve: {
                posts: function (postsService) { 
                    return postsService.getAll();
                }
            }
        })
        .state('/login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginController'
        })

})