/*const UserModel = require(`../models/user-model`)
const UserDto = require(`../dtos/user-dto`)*/

class UserService {
    async getUserData(userId) {
       /* const users = await UserModel.find()
        return users.map(u=>{
            return new UserDto(u)
        })*/
        return {
            userId
        }
    }
    async setUserData(userId, data) {
       /* const users = await UserModel.find()
        return users.map(u=>{
            return new UserDto(u)
        })*/
        return {

        }
    }
}

module.exports = new UserService()
