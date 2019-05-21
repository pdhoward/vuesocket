//const ws = new WebSocket(`ws://localhost:8200/ws`);

// detect mode and set endpoint
if (process.env.NODE_ENV === 'development') {
    console.log(`Development Mode Detected`)
     var ws = new WebSocket(`ws://localhost:3100/ws`);
} else {
    console.log(`Production Mode Detected`)
    var ws = new WebSocket(`wss://chaotic.ngrok.io/ws`);
}

ws.onopen = () => {
    console.log(`SOCKETS ARE LIVE`)  
    ws.send('hey')
  }

ws.onerror = error => {
    console.log(`WebSocket error: ${error}`)
}

ws.onmessage = e => {
    console.log(`hello from ws.js`)
    console.log(e.data)
}

ws.onclose = e => {
   console.log(`Connection closed`)
 
}

export default ws;
