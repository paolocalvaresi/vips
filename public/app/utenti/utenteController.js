angular.module('app').controller('utenteController', function ($scope, utente) {
    $scope.utente = utente.data;

})