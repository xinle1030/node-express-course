const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page, 200
  if (url === '/') {
    // send status code using writeHead
    // tell browser i m sending html using writeHead
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page, 200
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

// listen to port 5000
server.listen(5000)
