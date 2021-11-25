function documentation(req, res, next) {
    try {
        const userData = {
            get:["/api/user/2",
                "/api/productList?page=10&count=20&filter=all",
                "/api/product/5"
            ]
        }
        res.json(userData)
    } catch (e) {
        next(e)
    }
}




module.exports =  documentation