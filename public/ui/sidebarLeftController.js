angular.module('app').controller('sidebarLeftController', function ($scope, $rootScope, utentiService, $state) {

    utentiService.getOne($rootScope.id)
        .then(function (utente) {
            $scope.amici = utente.data.amici
        })
        .catch((err) => console.log(err))

    $scope.dettaglio = function (idutente) {
        $state.go('loggato.utente', {
            id: idutente
        })
    }

})