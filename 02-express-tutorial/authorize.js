const authorize = (req, res, next) => {
    // need to type http://localhost:5000/?user=john to address bar to be authorized
    const {user} = req.query
    if (user === "john"){
        req.user = {name: "john", id: 3}
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
  }

  module.exports = authorize