angular.module('app').service('loginService', function ($http) {


    var getByEmail = function (email) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/utenti/login',
            data: {
                email
            }

        });
    }



    
    // API
    return {
        getByEmail
    }
})