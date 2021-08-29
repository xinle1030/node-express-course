// Built in Module in node so no nid do npm install unless we are using external module
/*
  - os
  - Path 
  - FS 
  - HTTP
*/

const os = require('os')

// info about current user, which is me
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds, aka how long the computer has been running 
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
