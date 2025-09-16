import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useUsers } from '../context/UserContext'
import { fetchUserById } from '../api/userService'


export default function UserDetailsPage(){
const { id } = useParams()
const navigate = useNavigate()
const { getUser } = useUsers()
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


useEffect(()=>{
let mounted = true
const local = getUser(id)
if(local){ setUser(local); setLoading(false); return }
fetchUserById(id).then(u => { if(mounted) setUser(u) }).catch(()=>{}).finally(()=> { if(mounted) setLoading(false) })
return ()=> { mounted = false }
},[id, getUser])


if(loading) return <div className="text-sm text-slate-500">Loading...</div>
if(!user) return (
<div className="max-w-3xl mx-auto">
<div className="bg-white p-4 rounded shadow">User not found</div>
<div className="mt-3">
<button onClick={()=>navigate(-1)} className="px-3 py-2 rounded border">Back</button>
</div>
</div>
)


const { address = {}, company = {} } = user


return (
<div className="max-w-3xl mx-auto">
<div className="bg-white p-4 rounded shadow mb-4">
<div className="flex justify-between items-start">
<div>
<div className="text-xl font-semibold">{user.name}</div>
<div className="text-sm text-slate-500">@{user.username}</div>
</div>
<div className="text-right text-sm">{company?.name}</div>
</div>


<hr className="my-3" />
<div className="space-y-2 text-sm">
<div><strong>Email:</strong> {user.email}</div>
<div><strong>Phone:</strong> {user.phone}</div>
<div><strong>Address:</strong> {address.street || '-'}, {address.city || '-'}, {address.zipcode || '-'}</div>
<div><strong>Geo:</strong> lat {address.geo?.lat || '-'} | lng {address.geo?.lng || '-'}</div>
</div>
</div>


<div className="flex gap-2">
<Link to="/" className="px-3 py-2 rounded border">Back to list</Link>
</div>
</div>
)
}
