// Path module - allows to interact with our files easily
const path = require('path')

// return platform specific separator
console.log(path.sep)

// join a sequence of path segments using my platform specific separator
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// access the last portion of the file path
const base = path.basename(filePath)
console.log(base)

// return an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
