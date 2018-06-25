module.exports = (function () {
    var Utente = require('./Utente')

    var getAll = function (req, res) {

        Utente.find()
            .populate({
                path: 'amici',
                select: ['nome', 'cognome']
            })
            .populate('posts')
            .then((utenti) => res.json(utenti))
            .catch((err) => console.log(err))
    };

    var getOne = function (req, res) {
        Utente.findById(req.params.id)
            .populate({
                path: 'amici',
                select: ['nome', 'cognome']
            })
            .populate('posts')
            .then((utente) => res.json(utente))
            .catch((err) => console.log(err))

    }

    var getByFilter = function (req, res) {
        var query = Utente.find();
        if (req.query.citta) {
            query.where('citta').equals(req.query.citta)
        }

        if (req.query.interessi) {
            query.where('interessi').equals(req.query.interessi)
        }
        if (req.query.lavoro) {
            query.where('lavoro').equals(req.query.lavoro)
        }

        query
            .exec()
            .then((utenti) => res.json(utenti))
            .catch((err) => console.log(err));

    }

    var insertUser = function (req, res) {

        var utente = new Utente(req.body);
        utente.save()
            .then((utente) => res.json(utente))
            .catch((err) => res.json(err))
    }

    return {
        getAll,
        getOne,
        getByFilter,
        insertUser
    }

})()