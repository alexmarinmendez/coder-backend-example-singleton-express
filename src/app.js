import express from 'express'
import productsRouter from './routers/product.router.js'

const app = express()
app.use(express.json())
app.use('/api/products', productsRouter)

app.listen(8080, () => console.log('Server Up'))