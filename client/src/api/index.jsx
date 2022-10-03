import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchGroups = () => API.get('/groups')
export const fetchGroup = (id) => API.get(`/groups/${id}`)
export const createGroup = (newGroup) => API.post('/groups', newGroup)
export const updateGroup = (id, updatedGroup) => axios.patch(`groups/${id}`, updatedGroup)
export const deleteGroup = (id) => axios.delete(`groups/${id}`)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)