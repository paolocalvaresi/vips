angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('/', {
            url: '/',
            template: '<h1>La mia home page</h1>'
        })
        .state('/chi-siamo', {
            url: '/chi-siamo',
            template: '<h1>Pagina chi siamo</h1>'
        })

})