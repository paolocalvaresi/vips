angular.module('app').controller('utenteController', function ($scope, utente, postsService, utentiService) {
    $scope.utente = utente.data;

    $scope.addLike = function (id) {
        postsService.addLike(id)
            .then(function () {
                return utentiService.getOne(localStorage.id);
            })
            .then(function (utente) {
                $scope.utente = utente.data;
            })
    }

})