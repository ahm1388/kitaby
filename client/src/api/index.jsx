import axios from 'axios'

const url = 'http://localhost:5000/BookResults'

export const fetchGroups = () => axios.get(url)