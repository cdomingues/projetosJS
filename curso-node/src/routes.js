const express = require('express');
const routes = express.Router();

//primeira rota
routes.get('/', (req, res)=>{

    /* Product.create({
        title:'React Native',
        description:'Build native apps',
        url: 'http://github.com/facebook/react-native'
            }); */

    return res.send("Hello world!");
});

module.exports = routes;
