import { useState } from 'react'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}></Route>
    </Routes>
  )
}
export default App
