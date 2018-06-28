var express = require('express');
var posts = express.Router();
var controller = require('./controller');

// trova tutti posts
posts.get('/', controller.getAll);

// crea un post
posts.post('/', controller.insertPost)

//cancello il post
posts.delete('/:id', controller.deletePost)

//aggiungi like
posts.put('/likes/:id', controller.addLike)

//aggiungi commento
posts.put('/commento/:id', controller.addCommento)

module.exports = posts;