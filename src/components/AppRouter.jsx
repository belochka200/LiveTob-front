import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import WhereToGo from './pages/WhereToGo'
import Sights from './pages/Sights'

function AppRouter() {
  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/wheretogo' element={<WhereToGo />} />
      <Route path='/sights' element={<Sights />} />
    </Routes>
  )
}

export default AppRouter