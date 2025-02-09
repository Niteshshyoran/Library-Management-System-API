const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {type:String, require:true},
    ISBN: {type:String, unique:true, require:true},
    summary: {type:String},
    publicationDate: {type:Date},
    genres: {type:Array },
    copiesAvailable: {type:Number, default:1},
    // author (Author reference)
    // borrowedBy (Array of User references)

},{
    versionKey:false
})

const BookModel = mongoose.model(bookSchema, "author")

module.exports = {BookModel}