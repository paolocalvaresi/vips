var path = require('path');
module.exports = function (app, express) {

    // parsing del json
    app.use(express.json());

    //servo i file statici
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/popper', express.static(path.join(__dirname, '..', '..', 'node_modules', 'popper.js', 'dist', 'umd')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/ui-router', express.static(path.join(__dirname, '..', '..', 'node_modules', '@uirouter', 'angularjs','release')));

    // servo la mia applicazione
    app.use(express.static(path.join(__dirname, '..', '..', 'public')));

    // servo la homepage
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html')))


    // gestione delle rotte relative agli utenti
    app.use('/utenti', require('./utenti/index.js'));

    // gestione delle rotte relative ai posts
    app.use('/posts', require('./posts/index.js'));










    // redirect
    app.get('/*', (req, res) => res.redirect('/'));
}