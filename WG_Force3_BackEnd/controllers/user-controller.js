const userService = require(`../service/user-service`)

class UserController {
    async getUserData(req, res, next) {
        try {
            const params = req.params
            console.log(`getUserData params:${params}`)
            const userData = await userService.getUserData()
            await res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
