var mongoose = require('mongoose');

mongoose.connect('mongodb://root:paolo1983@ds263740.mlab.com:63740/vips',
    function (err) {
        if (err) console.log(err);
        else console.log("connesso al db");
    });

mongoose.Promise = global.Promise;