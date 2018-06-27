angular.module('app').service('postsService', function ($http) {


    var getAll = function () { 
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/posts'

        });
    }

    var addLike = function (id) { 
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/posts/likes/' + id
        })
    }

    return {
        getAll,
        addLike
    }
 })