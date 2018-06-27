angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        //STAO PER IL LOGIN
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginController',
            onEnter: function ($state) {
                let loggato = localStorage.loggato;
                if (loggato == "true") {
                    $state.go('loggato.home')
                } else {

                }
            }
        })
        // STATO PADRE ASTRATTO
        .state('loggato', {
            url: '/',
            abstract: true,
            templateUrl: 'main.html',
            onEnter: function ($state, $rootScope) {
                let loggato = localStorage.loggato;
                if (loggato == "false") {
                    $state.go('login')
                } else {

                    $rootScope.loggato = true;
                }
            }


        })
        // STATI FIGLI
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

})