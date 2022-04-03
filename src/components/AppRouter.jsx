import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import WhereToGo from './pages/WhereToGo'
import Sights from './pages/Sights'
import Events from './pages/Events'
import Login from './pages/Login'
import Register from './pages/Register'


function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/wheretogo' element={<WhereToGo />} />
      <Route path='/sights' element={<Sights />} />
      <Route path='/events' element={<Events />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reg' element={<Register />} />
    </Routes>
  )
}

export default AppRouter