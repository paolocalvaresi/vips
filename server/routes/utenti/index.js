var express = require('express');
var utenti = express.Router();
var controller = require('./controller');

// trova tutti utenti
utenti.get('/', controller.getAll);

// trova tutti utenti tramite filtro
utenti.get('/filtro', controller.getByFilter);

//trovare tramite id (dettaglio utente)
utenti.get('/:id([0-9a-f]{24})', controller.getOne);


// crea un utente
utenti.post('/', controller.insertUser)

module.exports = utenti;