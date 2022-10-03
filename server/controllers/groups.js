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
        console.log(newGroup);
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateGroup = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteGroup = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}