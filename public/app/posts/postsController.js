angular.module('app').controller('postsController', function ($scope, posts, postsService) {

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
            
            .then(function (res) {
                var id = res.data._id;

                return utenti.inserPost(id);
            })
            .then(function () {
                return postsService.getAll();
            })
            .then(function (res) {
                $scope.posts = res.data
            })
            .catch(function () {})


    }


});