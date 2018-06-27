angular.module('app').controller('utentiController', function ($scope, utenti) {
    $scope.utenti = utenti.data;

    console.log($scope.utenti)
})