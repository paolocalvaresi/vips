var path = require('path');
module.exports = function (app, express) {

    // parsing del json
    app.use(express.json());

    // servo la homepage
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html')))


    // gestione delle rotte relative agli utenti
    app.use('/utenti', require('./utenti'));










    // redirect
    app.get('/*', (req, res) => res.redirect('/'));
}