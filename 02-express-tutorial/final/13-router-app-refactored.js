const express = require('express')
const app = express()

const people = require('../routes/new_people')  // people router
const auth = require('../routes/auth')      // login router

// static assets
app.use(express.static('../methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)  // set the base url to /api/people for all the router in people
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
