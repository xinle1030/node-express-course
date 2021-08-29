// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names') // pass the filename, . means in the same directory
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)

// either of the following 2 lines of code will cause the code in ./07-mind-grenade to run becuz of a function is called in the file
require('./07-mind-grenade')    
const run = require('./07-mind-grenade')    

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
