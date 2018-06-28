angular.module('app').controller('postsController', function ($scope, posts, postsService, utentiService) {

    $scope.posts = posts.data;


    $scope.addLike = function (id) {
        postsService.addLike(id)
            .then(function () {
                return postsService.getAll();
            })
            .then(function (posts) {
                $scope.posts = posts.data;
            })
    }


    $scope.inserisci = function () {

        var post = {
            descrizione: $scope.descrizione,
            foto: [$scope.foto],
            likes: 0
        }
        postsService.addPost(post)
            .then(function (post) {
                var body = {
                    idpost: post.data._id
                }
                return utentiService.insertPost(body);
            })
            .then(function () {
                return postsService.getAll();
            })
            .then(function (posts) {
                $scope.posts = posts.data
            })
            .catch(function (err) {
                console.log(err);
            })

    }


});