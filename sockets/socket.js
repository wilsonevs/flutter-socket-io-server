const {io}= require('../index');

//Mensajes de sockets.io
io.on('connection', client => {
    console.log('cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) =>{
        console.log('Mensaje!!!', payload);

        io.emit('mensaje',{admin:'Nuevo mensaje'});
    });

    client.on('emitir-mensaje', (payload) =>{
        // io.emit('nuevo-mensaje','Hey!!!!!'); // Emite a todos
         client.broadcast.emit('nuevo-mensaje',payload); // Emite a todos, menos al que lo emite
    });

});