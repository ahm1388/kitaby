import mongoose from 'mongoose'

const groupSchema = mongoose.Schema({
     title: String,
     author: String,
     description: String,
     selectedFile: String,
     name: String,
     createdBy: String,
     signups: Number,
     capacity: Number,
     likes: Number,
     dislikes: Number,
     comments: { type: [String], default: [] }
})

const BookGroup = mongoose.model('BookGroup', groupSchema)

export default BookGroup