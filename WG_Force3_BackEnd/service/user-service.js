/*const UserModel = require(`../models/user-model`)
const UserDto = require(`../dtos/user-dto`)*/

class UserService {
    async getUserData() {
       /* const users = await UserModel.find()
        return users.map(u=>{
            return new UserDto(u)
        })*/
        return {

        }
    }
}

module.exports = new UserService()
