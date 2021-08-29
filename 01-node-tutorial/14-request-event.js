const http = require('http')

/*Method 1 for creating server and listen to request */
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

/*Method 2 for creating server and listen to request */
// Using Event Emitter API
const server = http.createServer()  // server emits the request event that we can listen to using .on('request')
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
