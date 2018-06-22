var express = require('express');
var app = express();
const PORT = 3000;

require('./config/db.js')


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
