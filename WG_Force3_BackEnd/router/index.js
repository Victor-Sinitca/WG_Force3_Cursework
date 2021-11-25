const Router = require(`express`).Router
const userController = require(`../controllers/user-controller`)
const productController = require(`../controllers/product-controller`)

const router = new Router()

router.get(`/user/:id`,userController.getUserData)
router.get(`/productList?pageNumber?pageSize?filter`,productController.getProducts)
router.get(`/product/:id`,productController.getOneProduct)

module.exports = router
