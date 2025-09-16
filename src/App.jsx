import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import UserDetailsPage from './pages/UserDetailsPage'


export default function App(){
return (
<div className="min-h-screen p-4 md:p-8">
<Routes>
<Route path="/" element={<DashboardPage/>} />
<Route path="/user/:id" element={<UserDetailsPage/>} />
</Routes>
</div>
)
}
