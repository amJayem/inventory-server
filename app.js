const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const brandRoute = require('./routes/brand.route')
const productRoute = require('./routes/product.route')
const categoryRoute = require('./routes/category.route')
const stockRoute = require('./routes/stock.route')
const storeRoute = require('./routes/store.route')
const supplierRoute = require('./routes/supplier.route')
const user = require('./routes/user.route')

app.get('/', (req, res) => {
  res.send('inventory server')
})

app.use('/api/v1/product', productRoute)
app.use('/api/v1/brand', brandRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/stock', stockRoute)
app.use('/api/v1/store', storeRoute)
app.use('/api/v1/supplier', supplierRoute)

app.use('/user', user)

module.exports = app
