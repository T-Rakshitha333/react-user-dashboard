import axios from 'axios'
const API_BASE = 'https://jsonplaceholder.typicode.com'
export const fetchUsers = () => axios.get(`${API_BASE}/users`).then(r=>r.data)
export const fetchUserById = (id) => axios.get(`${API_BASE}/users/${id}`).then(r=>r.data)
