// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods (first parameter is the string name of the event)
//    - on: listen for an event
//    - emit : emit an event
// keep track of the order
// additional arguments
// built-in modules utilize it

// ORDER important (first on, then emit)
// must set listener first
// only then release an event so that my listener can listen to it 

// on listener here can retrieve the arguments passed by customEmitter.emit('response', 'john', 34)
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})

// no parameter passed in to the callback so cannot access to the arguments
customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
