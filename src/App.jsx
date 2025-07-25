import { useState } from 'react'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive'
import { Important } from './pages/Important'
import { Bin } from './pages/Bin'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}></Route>
      <Route path='/important' element={<Important/>}></Route>
      <Route path='/bin' element={<Bin/>}></Route>
    </Routes>
  )
}
export default App
