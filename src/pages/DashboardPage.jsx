import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import CreateUserForm from '../components/CreateUserForm'
import UserCard from '../components/UserCard'
import { useUsers } from '../context/UserContext'


export default function DashboardPage(){
const { users, loading } = useUsers()
const [q, setQ] = useState('')


const filtered = useMemo(()=>{
const k = q.trim().toLowerCase()
if(!k) return users
return users.filter(u => u.name.toLowerCase().includes(k))
},[q, users])


return (
<div className="max-w-6xl mx-auto">
<Header />
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1">
<div className="flex gap-3 items-center mb-4">
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search users by name..." className="flex-1 px-3 py-2 border rounded" />
<div className="text-sm text-slate-500">{filtered.length} users</div>
</div>


{loading ? <div className="text-sm text-slate-500">Loading users...</div> : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{filtered.map(u => <UserCard key={u.id} user={u} />)}
</div>
)}
</div>


<div className="w-full md:w-80">
<CreateUserForm />
</div>
</div>
</div>
)
}
