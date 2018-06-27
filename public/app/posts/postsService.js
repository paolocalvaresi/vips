angular.module('app').service('postsService', function ($http) {


    var getAll = function () { 
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/posts'

        });
    }

    return {
        getAll
    }
 })