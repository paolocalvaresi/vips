angular.module('app').controller('sidebarLeftController', function ($scope, $rootScope, utentiService, $state) {

    utentiService.getOne(localStorage.id)
        .then(function (utente) {
            $scope.amici = utente.data.amici
        })

    $scope.dettaglio = function (idutente) {
        $state.go('loggato.utente', {
            id: idutente
        })
    }

})