angular.module('app').service('utentiService', function ($http) {
    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/utenti'
        })
    }

    return {
        getAll
    }
})