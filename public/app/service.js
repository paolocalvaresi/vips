angular.module('app').service('UtentiSrv', function ($http) { 

    const URL = 'http://localhost:3000';
    
    var getAll = function () { 
        return $http({
            method: 'GET',
            url: URL + '/utenti'
        })
    }



    //API 
    return {
        getAll

    }
})