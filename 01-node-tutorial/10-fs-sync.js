// sync runs from top to bottom line by line

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./01-node-tutorial/content/first.txt', 'utf8')
const second = readFileSync('./01-node-tutorial/content/second.txt', 'utf8')

// by  default we will overwrite the content in result-sync.txt
// using flag: "a" will cause us to append the new content to result-sync.txt
writeFileSync(
  './01-node-tutorial/content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
