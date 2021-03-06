const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});
requireDir('./src/models/');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);
