import React from 'react'
import { Link } from 'react-router-dom'


export default function UserCard({ user }){
return (
<div className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
<div className="font-medium">{user.name}</div>
<div className="text-sm text-slate-500">{user.company?.name ?? '-'}</div>
<div className="text-sm text-slate-600">{user.email}</div>
<div className="text-sm text-slate-600">{user.phone}</div>
<div className="mt-3">
<Link to={`/user/${user.id}`} className="inline-block px-3 py-2 text-sm rounded bg-teal-500 text-white">View Details</Link>
</div>
</div>
)
}
