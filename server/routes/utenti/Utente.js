var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var utenteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    cognome: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        maxlength: 60,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 8,
        validate: {
            validator: function () {
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.password)
            },
            message: 'Password deve essere di almeno 8 caratteri e contenere un numero'
        },
    },
    eta: {
        type: Number,
        required: true,
        max: 100,
        min: 16
    },
    sesso: {
        type: String,
        required: true,
        enum: ['Maschio', 'Femmina']
    },
    foto: [String],
    lavoro: String,
    citta: String,
    interessi: [String],
    amici: [{
        type: Schema.Types.ObjectId,
        ref: 'Utente'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],

});

var Utente = mongoose.model('Utente', utenteSchema);

module.exports = Utente;