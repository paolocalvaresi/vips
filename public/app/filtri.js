angular.module('app')
    .filter('filtraSesso', function () {
        return function (utenti, sesso) {
            if (!sesso) return utenti;
            return utenti.filter(function (utente) { 
                return utente.sesso == sesso;
            })
        };
    })
    .filter('maiuscola', function () {
        return function (text) {
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        };
    });
    