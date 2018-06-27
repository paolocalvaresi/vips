angular.module('app').controller('loginController', function ($scope, loginService, $rootScope, $state) {

    $scope.login = function () {
        loginService.getByEmail($scope.email)
            .then((res) => { 
                if (res.data.password == $scope.password) {
                    localStorage.loggato = true;
                    $rootScope.loggato = true;
                    $state.go('loggato.home')
                } else { 
                    $scope.error = 'email o password errati'
                }
            })
            .catch((err) => { });
    }

})


