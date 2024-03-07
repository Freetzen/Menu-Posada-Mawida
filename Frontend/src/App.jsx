import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/adminWindow/AdminWindow'
import MainFoodMenu from './pages/mainFoodMenu/MainFoodMenu'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/foodMenu' element={<MainFoodMenu />} />
      </Routes>
    </>
  )
}

export default App
