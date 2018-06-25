var express = require('express');
var posts = express.Router();
var controller = require('./controller');

// trova tutti posts
posts.get('/', controller.getAll);

// // trova tutti posts tramite filtro
// posts.get('/filtro', controller.getByFilter);

// //trovare tramite id (dettaglio utente)
// posts.get('/:id([0-9a-f]{24})', controller.getOne);


// crea un post
posts.post('/', controller.insertPost)

module.exports = posts;