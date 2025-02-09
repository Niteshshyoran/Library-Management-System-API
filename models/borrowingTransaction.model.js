const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    book: {require:true}, // book (Book reference, required)
    member: {require:true}, // member (User reference, required)
    borrowDate: {type:Date, default:Date.now},
    dueDate: {type:Date, require:true },
    returnDate: {type:Date},
    status: {type:String, enum:['Borrowed', 'Returned'], default: 'Borrowed'}

},{
    versionKey:false
})

const BookModel = mongoose.model(bookSchema, "author")

module.exports = {BookModel}