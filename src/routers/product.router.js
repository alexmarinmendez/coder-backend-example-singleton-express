import { Router } from 'express'
import { ProductManager } from '../productManager.js'

const router = Router()

router.get('/', (req, res) => {
    const productManager = new ProductManager()
    const result = productManager.getProducts()
    const limit = req.query.limit
    res.status(200).json({ status: 'success', payload: result.slice(0, limit) })
})

router.get('/:pid', (req, res) => {
    const id = parseInt(req.params.pid)
    const productManager = new ProductManager()
    const result = productManager.getProductById(id)
    if (typeof result == 'string') {
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({ error: result.slice(6) })
    }
    res.status(200).json({ status: 'success', payload: result })
})

router.post('/', (req, res) => {
    const product = req.body
    const productManager = new ProductManager()
    const result = productManager.addProduct(product)
    if (typeof result == 'string') {
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({ error: result.slice(6) })
    }
    res.status(201).json({ status: 'success', payload: result })
})

export default router