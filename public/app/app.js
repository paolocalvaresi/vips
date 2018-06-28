angular.module('app', ['ui.router'])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.id = localStorage.id;
    }])