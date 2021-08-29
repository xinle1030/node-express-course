// local
const secret = 'SUPER SECRET'
// share with the other modules
const john = 'john'
const peter = 'peter'

// export john, peter from this module for use in other modules
// when export more than one thing, wrap them with {}
module.exports = { john, peter }
