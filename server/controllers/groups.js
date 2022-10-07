import mongoose from 'mongoose'
import BookGroup from '../models/bookGroup.js  '

export const getGroups = async  (req, res) => {
    try {
        const groups = await BookGroup.find()
        res.status(200).json(groups)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getGroup = async  (req, res) => {
    const { id } = req.params

    try {
        const group = await BookGroup.findById(id)
        res.status(200).json(group)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createGroup = async (req, res) => {
    const group = req.body
    const newGroup = new BookGroup({ ...group, createdBy: req.userId })
    try {
        console.log(newGroup)
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const commentGroup = async (req, res) => {
    const { id } = req.params
    const { value } = req.body
    const group =  await BookGroup.findById(id)

    group.comments.push(value)

    const updatedGroup = await BookGroup.findByIdAndUpdate(id, group, { new: true })
    res.status(200).json(updatedGroup)
}

export const updateGroup = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteGroup = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    await BookGroup.findByIdAndRemove(id)

    res.json({ message: 'Group successfully deleted.' })
}

export const likeGroup = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const group = await BookGroup.findById(id)
    const updatedGroup = await BookGroup.findByIdAndUpdate(id, {likes: group.likes + 1}, { new: true })

    res.json(updatedGroup)
}

export const dislikeGroup = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const group = await BookGroup.findById(id)
    const updatedGroup = await BookGroup.findByIdAndUpdate(id, {likes: group.dislikes + 1}, { new: true })

    res.json(updatedGroup)
}