const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {type:String, unique:true, require:true},
    password: {type:String, require:true},
    role: {type:String, enum:['Admin', 'Member'], default:'Member' },
    name: {type:String, require:true},
    email: {type:String, unique:true, require:true},
    borrowedBooks: {type: String, require: true}
    // borrowedBooks (Array of Book references)

},{
    versionKey:false
})

const UserModel = mongoose.model(userSchema, "user")

module.exports = {UserModel}




