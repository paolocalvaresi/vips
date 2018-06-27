var express = require('express');
var posts = express.Router();
var controller = require('./controller');

// trova tutti posts
posts.get('/', controller.getAll);

// crea un post
posts.post('/', controller.insertPost)

//aggiungi like
posts.put('/likes/:id', controller.addLike)


module.exports = posts;