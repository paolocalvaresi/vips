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
        data: Date

    }],
    data: Date,
    likes: Number
});


postSchema.pre('save', function (next) { 
    this.data = new Date();
    next();
})





var Post = mongoose.model('Post', postSchema);

module.exports = Post;