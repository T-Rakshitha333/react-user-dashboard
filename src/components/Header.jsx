import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
<header className="bg-white rounded-lg shadow px-4 py-3 mb-6 flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold">User Dashboard</h1>
<p className="text-sm text-slate-500">searchable-list · create (client-side) · details</p>
</div>
<div>
<Link to="/" className="text-sm text-slate-600 hover:text-slate-800">Home</Link>
</div>
</header>
)
}
