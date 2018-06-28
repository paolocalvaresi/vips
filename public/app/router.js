angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", "app/home");
    $urlRouterProvider.otherwise("app/home");
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
                }
            }
        })
        // STATO PADRE ASTRATTO
        .state('loggato', {
            url: '/app/',
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
        // STATO FIGLIO CHE MOSTRA LA LISTA DEI MIEI POSTS IN HOME PAGE
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
        // STATO FIGLIO CHE MOSTRA LA LISTA DEGLI UTENTI
        .state('loggato.utenti', {
            url: 'utenti',
            templateUrl: 'app/utenti/utentiTemplate.html',
            controller: 'utentiController',
            resolve: {
                utenti: function (utentiService) {
                    return utentiService.getAll();
                }
            }
        })
        .state('loggato.utente', {
            url: 'utenti/{id}',
            templateUrl: 'app/utenti/utenteTemplate.html',
            controller: 'utenteController',
            resolve: {
                utente: function (utentiService, $stateParams) {
                    return utentiService.getOne($stateParams.id);
                }
            }
        })

})