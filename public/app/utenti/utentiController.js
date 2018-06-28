angular.module('app').controller('utentiController', function ($scope, utenti, $state) {
    $scope.utenti = utenti.data;

    $scope.dettaglio = function (idutente) { 
        $state.go('loggato.utente', {id:idutente})
    }
})