/*const UserModel = require(`../models/user-model`)
const UserDto = require(`../dtos/user-dto`)*/

class ProductService {
    async getOneProduct(productID) {
        /*const users = await UserModel.find()
        return users.map(u=>{
            return new UserDto(u)
        })*/
        return {
            productID
        }
    }
    async getProducts(page=1,count,filter) {
       /* const users = await UserModel.find()
        return users.map(u=>{
            return new UserDto(u)
        })*/
        return {
            page,count,filter
        }
    }
}

module.exports = new ProductService()
