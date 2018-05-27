// Create WebSocket connection.
export const socket = new WebSocket('ws://192.168.1.56:9000');
export let dataFromServer=null

// Connection opened
socket.addEventListener('open', function (event) {
 /*   console.log('send!')*/
    socket.send('give log data:');
});

// Listen for messages
socket.addEventListener('message', function (event) {
   /* console.log('Message from server ', event.data);*/
    dataFromServer = event.data
});
