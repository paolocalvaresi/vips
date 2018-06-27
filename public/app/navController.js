angular.module('app').controller('navController', function ($scope, loginService, $rootScope, $state) {

    $scope.logout = function () {

        $rootScope.loggato = false;
        localStorage.loggato = false;
        $state.go('/login')

    }

})