angular.module('app').controller('postsController', function ($scope, posts) { 
    
    $scope.posts = posts.data;


});