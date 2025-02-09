const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name: {type:String, require:true},
    biography:{type:String},
    dateOfBirth: {type:Date},
    nationality: {type:String},
    // books (Array of Book references)

},{
    versionKey:false
})




const AuthorModel = mongoose.model(authorSchema, "author")

module.exports = {AuthorModel}