import io from 'socket.io-client'
// detect mode and set endpoint
if (process.env.NODE_ENV === 'development') {
    console.log(`Development Mode Detected`)
     var ws = io.connect(`ws://localhost:3100/ws`);
} else {
    console.log(`Production Mode Detected`)
    var ws = io.connect(`wss://chaotic.ngrok.io/ws`);
}

ws.on('connect', () => {
    console.log(`SOCKETS ARE LIVE ${e}`)  
    ws.emit('test', {'msg': 'Hello World'})
  })

ws.on('error', (error) => {
    console.log(`WebSocket error: ${error.message}`)
    ws.close()
})

ws.on('disconnect', () => {
    console.log('Socket disconnected' )  
 
})

export default ws;
