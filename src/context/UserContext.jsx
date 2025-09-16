import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchUsers } from '../api/userService'


const UserContext = createContext()
export const useUsers = () => useContext(UserContext)


export function UserProvider({ children }){
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
let mounted = true
fetchUsers()
.then(data => { if(mounted) setUsers(data) })
.catch(()=>{})
.finally(()=> { if(mounted) setLoading(false) })
return ()=> { mounted = false }
},[])


const addUser = (user) => {
// client-side id
const id = users.length ? Math.max(...users.map(u=>u.id)) + 1 : 1
const newUser = { ...user, id }
setUsers(prev => [newUser, ...prev])
}


const getUser = (id) => users.find(u => String(u.id) === String(id))


return (
<UserContext.Provider value={{ users, loading, addUser, getUser }}>
{children}
</UserContext.Provider>
)
}
