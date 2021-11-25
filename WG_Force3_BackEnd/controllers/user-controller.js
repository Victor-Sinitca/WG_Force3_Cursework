const userService = require(`../service/user-service`)

class UserController {
    async getUserData(req, res, next) {
        try {
            const {id:userId}=req.params
           /* console.log(`id:${userId}`)*/
            const userData = await userService.getUserData(userId)
            await res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async setUserData(req, res, next) {
        try {
            const {id:userId}=req.params
           /* console.log(`id:${userId}`)*/
            const userData = await userService.setUserData(userId)
            await res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
