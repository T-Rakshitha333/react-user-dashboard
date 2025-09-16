import React, { useState } from 'react'
import { useUsers } from '../context/UserContext'


export default function CreateUserForm(){
const { addUser } = useUsers()
const [form, setForm] = useState({ name:'', email:'', phone:'', company:'' })


const onChange = (e) => setForm({...form, [e.target.name]: e.target.value})
const onSubmit = (e) => {
e.preventDefault()
if(!form.name.trim()) return alert('Name required')
addUser({
name: form.name,
email: form.email,
phone: form.phone,
company: { name: form.company || 'Independent' },
address: { street:'', city:'', zipcode:'', geo:{ lat:'0', lng:'0' } }
})
setForm({ name:'', email:'', phone:'', company:'' })
}


return (
<form onSubmit={onSubmit} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
<input name="name" value={form.name} onChange={onChange} placeholder="Name" className="px-3 py-2 border rounded" />
<input name="email" value={form.email} onChange={onChange} placeholder="Email" className="px-3 py-2 border rounded" />
<input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="px-3 py-2 border rounded" />
<input name="company" value={form.company} onChange={onChange} placeholder="Company" className="px-3 py-2 border rounded" />
<button type="submit" className="mt-1 px-3 py-2 rounded bg-teal-500 text-white">Create (client-side)</button>
</form>
)
}
