import express from 'express'
import { getGroups, getGroup, createGroup, updateGroup, deleteGroup } from '../controllers/groups.js'
import auth from '../middleware/auth.js'

 const router = express.Router()

 router.get('/', getGroups)
 router.get('/:id', getGroup)

 router.post('/', auth, createGroup)
 router.patch('/:id', auth, updateGroup)
 router.delete('/:id', auth, deleteGroup)

 export default router  