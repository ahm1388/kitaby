import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
     title: String,
     author: String,
     description: String,
     img: String,
     createdBy: String,
     signups: Number,
     capacity: Number
})

const BookGroup = mongoose.model('Book', bookSchema)

export default BookGroup