var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Recibido: ', mensaje);
}, function() {
    console.log('Se disparo el callback');
});

// Enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'German',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});