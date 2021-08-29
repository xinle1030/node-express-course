const express = require('express')
const app = express()
const { products } = require('../data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})


// insert route parameter using :
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params  // retrieve the params sent by the user in the request body which is always come back as a string

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  // if i type url "http://localhost:5000/api/products/1/reviews/abc" into address bar
  console.log(req.params) // this will give us { productID: '1', reviewID: 'abc' }
  res.send('hello world')
})

// handle query strings
// try type url http://localhost:5000/api/v1/query?name=john&id=4
app.get('/api/v1/query', (req, res) => {
  console.log(req.query)  // this will give us { name: 'john', id: '4' }


  // type url http://localhost:5000/api/v1/query?search=a&limit2
  const { search, limit } = req.query
  let sortedProducts = [...products]  // if user din give search or limit, I give all the products

  // if search is given by user, return products with name starting with search value
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  // if limit is given by user, return a number of products with a limit
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  // no sorted products with the given limit and search found 
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] })  // use return here to quit the function
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
