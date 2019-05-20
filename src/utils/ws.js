const ws = new WebSocket(`ws://localhost:8200/ws`);

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

export default ws;
