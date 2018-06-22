var express = require('express');
var utenti = express.Router();
var controller = require('./controller');

// trova tutti utenti
utenti.get('/', controller.getAll);

// crea un utente
utenti.post('/', controller.insertUser)

module.exports = utenti;