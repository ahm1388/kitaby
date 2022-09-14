import BookGroup from '../models/BookGroup.js  '

export const getBooks = async  (req, res) => {
    try {
        const books = await Book.find()

        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addBook = async (req, res) => {
    const group = req.body

    const newGroup = new BookGroup(group)
    try {
        await newGroup.save()
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}