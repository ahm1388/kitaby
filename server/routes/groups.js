import express from 'express'
import { getGroups, getGroup, createGroup, updateGroup, commentGroup, deleteGroup, likeGroup, dislikeGroup } from '../controllers/groups.js'
import auth from '../middleware/auth.js'

 const router = express.Router()

 router.get('/', getGroups)
 router.get('/:id', getGroup)

 router.post('/', createGroup)
 router.patch('/:id', auth, updateGroup)
 router.post('/:id/commentGroup', commentGroup)
 router.delete('/:id', auth, deleteGroup)
 router.patch('/:id/likeGroup', likeGroup)
 router.patch('/:id/dislikeGroup', dislikeGroup)

 export default router  