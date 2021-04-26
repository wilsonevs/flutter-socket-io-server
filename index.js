const express = require('express');
const path= require('path');
require('dotenv').config();

// App de express
const app = express();


//Node server.io
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



//Path publico
const publicPath= path.resolve(__dirname, 'public');

// App.use => Para utilizar los recursos del Path publico
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err)=> {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto`, process.env.PORT);
})

// Instalaciones => express,dotenv, nodemon, socket.io