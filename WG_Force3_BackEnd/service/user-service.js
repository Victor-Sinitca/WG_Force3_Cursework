/*const UserModel = require(`../models/user-model`)
const UserDto = require(`../dtos/user-dto`)*/
users = [
    {
        userID: "1",
        wishlist: ["1", "8", "7"],
        shopping: ["2", "6"],
    },
    {
        userID: "2",
        wishlist: ["2", "7"],
        shopping: ["5", "3", "1"],
    },
    {
        userID: "3",
        wishlist: ["4"],
        shopping: ["1", "3"],
    },
    {
        userID: "4",
        wishlist: ["1", "8"],
        shopping: ["5", "10"],
    },
]

class UserService {
    async getUserData(userId) {
        /*console.log(`userId: ${userId}`)*/
        let resultCode = 0
        const messages = []
        const user = users.filter(value => userId === value.userID)
        /*console.log(`user: ${user}`)*/
        if (user.length === 0 || user.length > 1) {
            resultCode = 1
            if (user.length === 0) messages.push("user with passed id not found")
            if (user.length > 1) messages.push("there are several user with the same id")
        }
        if (resultCode) {
            return {
                resultCode,
                messages,
                data: {}
            }
        }
        /* const users = await UserModel.find()
         return users.map(u=>{
             return new UserDto(u)
         })*/
        return {
            resultCode,
            messages,
            data: user[0]
        }
    }
    async setUserData(userId, data) {
        /* const users = await UserModel.find()
         return users.map(u=>{
             return new UserDto(u)
         })*/
        return {}
    }
}

module.exports = new UserService()
