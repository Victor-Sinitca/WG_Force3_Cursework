const {Schema, model} = require(`mongoose`)


const UserScheme = new Schema({



    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},

})
module.exports = model("User", UserScheme)

