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

export const createGroup = async (req, res) => {
    const group = req.body
    const newGroup = new BookGroup(group)
    try {
        console.log(newGroup);
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}