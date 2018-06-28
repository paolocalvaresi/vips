var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    foto: [String],
    descrizione: {
        type: String,
        required: true,
        maxlength: 500,
        minlength: 1
    },
    commenti: [{
        idutente: {
            type: Schema.Types.ObjectId,
            required: true
        },
        testo: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            default: Date.now
        },

    }],
    data: {
        type: Date,
        default: Date.now
    },

    likes: Number
});


postSchema.pre('save', function (next) {
    next();
})





var Post = mongoose.model('Post', postSchema);

module.exports = Post;