angular.module('app').controller('loginController', function ($scope, loginService, $rootScope, $state) {

    $scope.login = function () {
        loginService.getByEmail($scope.email).then(function (res) {
            if (res.data.password == $scope.password) {
                $rootScope.loggato = true;
                localStorage.loggato = true;
                $state.go('loggato.home')
            } else {
                $scope.error = "password o email non validi"
            }
        })
    }

})