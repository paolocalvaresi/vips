module.exports = (function () {
    var Utente = require('./Utente')

    var getAll = function (req, res) {
        Utente.find()
            .then((utenti) => res.json(utenti))
            .catch((err) => console.log(err))
    };

    var insertUser = function (req, res) {

        var utente = new Utente(req.body);
        utente.save()
            .then((utente) => res.json(utente))
            .catch((err) => res.json(err))
    }

    return {
        getAll,
        insertUser
    }

})()