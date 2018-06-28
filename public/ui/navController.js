angular.module('app').controller('navController', function ($scope, $rootScope, $state) {

    $scope.logout = function () {

        $rootScope.loggato = false;
        localStorage.loggato = false;
        localStorage.id = '';
        $state.go('login')

    }

    $scope.id = localStorage.id
})