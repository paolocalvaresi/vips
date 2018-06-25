angular.module('app').controller('controller', function ($scope) {

    $scope.titolo = 'L\'allegra fattoria';
 
    $scope.animali = [
        {
            nome: 'felix',
            razza: 'suina',
            immagine: 'https://images2.corriereobjects.it/methode_image/2018/06/24/Spettacoli/Foto%20Gallery/920x920_MGZOOM.jpg'
        },
        {
            nome: 'felix',
            razza: 'felina',
            immagine: 'https://www.ideegreen.it/wp-content/uploads/2017/04/Gatto-che-miagola-1.jpg'
        }
    ];

    $scope.inserisci = function () { 
        $scope.animali.push(angular.copy($scope.nuovo));
    }
});