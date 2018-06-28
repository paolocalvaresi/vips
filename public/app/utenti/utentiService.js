angular.module('app').service('utentiService', function ($http, $rootScope) {

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

    var insertPost = function (body) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/utenti/' + $rootScope.id + '/posts',
            data: body
        })
    }



    return {
        getAll,
        getOne,
        insertPost
    }
})