import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchGroups = () => API.get('/groups')
export const createGroup = (newGroup) => API.post('/groups', newGroup)
export const updateGroup = (id, updatedGroup) => axios.patch(`groups/${id}`, updatedGroup)
export const deleteGroup = (id) => axios.delete(`groups/${id}`)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)