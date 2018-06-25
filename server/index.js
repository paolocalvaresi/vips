var express = require('express');
var app = express();
var path = require('path');

const PORT = 3000;

require('./config/db.js')

var routes = require('./routes');
routes(app, express);


// livereload
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(path.join(__dirname, '..', 'public'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))