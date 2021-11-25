const productService = require(`../service/product-service`)

class ProductController {
    async getOneProduct(req, res, next) {
        try {
            const params = req.params
            console.log(`getOneProduct params:${params}`)
            const oneProduct = await productService.getOneProduct()
            await res.json(oneProduct)
        } catch (e) {
            next(e)
        }
    }
    async getProducts(req, res, next) {
        try {
            const params = req.params
            console.log(`getProducts params:${params}`)
            const products = await productService.getProducts()
            await res.json(products)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductController()
