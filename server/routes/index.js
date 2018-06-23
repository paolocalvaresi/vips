var path = require('path');
module.exports = function (app, express) {

    // parsing del json
    app.use(express.json());

    // servo la homepage
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html')))


    // gestione delle rotte relative agli utenti
    app.use('/utenti', require('./utenti/index.js'));
   
    // gestione delle rotte relative ai posts
    app.use('/posts', require('./posts/index.js'));










    // redirect
    app.get('/*', (req, res) => res.redirect('/'));
}