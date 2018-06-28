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

    var addPost = function (post) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/posts/',
            data: post
        })

    }

    var deletePost = function (id) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/' + id,
        })
    }

    return {
        getAll,
        addLike,
        addPost,
        deletePost
    }
})