export class ProductManager {
    #products

    constructor() {
        this.#products = []
    }

    #generateID() {
        return (this.#products.length === 0) ? 1 : this.#products[this.#products.length - 1].id + 1
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.code || !product.stock)
            return '[400] Required fields missing'
        const found = this.#products.find(item => item.code === product.code)
        if (found) {
            return '[500] Code already exists.'
        }
        const productToAdd = { id: this.#generateID(), ...product }
        this.#products.push(productToAdd)
        return productToAdd
    }
    
    getProducts() {
        return this.#products
    }

    getProductById(id) {
        const found = this.#products.find(item => item.id === id)
        if (!found) return '[404] Not Found'
        return found
    }
}