import mongoose from 'mongoose'

const groupSchema = mongoose.Schema({
     title: String,
     author: String,
     description: String,
     selectedFile: String,
     createdBy: String,
     signups: Number,
     capacity: Number
})

const BookGroup = mongoose.model('BookGroup', groupSchema)

export default BookGroup