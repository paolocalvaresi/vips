angular.module('app').service('utentiService', function ($http) {
    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/utenti'
        })
    }

    var getOne = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/utenti/' + id
        })
    }



    return {
        getAll,
        getOne
    }
})