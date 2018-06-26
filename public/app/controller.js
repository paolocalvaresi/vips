angular.module('app').controller('controller', function (
    $scope,
    UtentiSrv,
    $interval) {

    $scope.titolo = 'Utenti';


    UtentiSrv.getAll()
        .then(function (risposta) {
            $scope.utenti = risposta.data;
        });

    $interval(function () {
        $scope.data = new Date();
    },1000)

});