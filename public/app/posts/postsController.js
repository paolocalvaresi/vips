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


});