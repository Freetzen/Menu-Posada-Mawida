import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar'
import Admin from './pages/adminWindow/AdminWindow'
import MainFoodMenu from './pages/mainFoodMenu/MainFoodMenu'
import Footer from './components/footer/Footer'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <>
      {<NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/foodMenu' element={<MainFoodMenu />} />
      </Routes>
      {<Footer />}
    </>
  )
}

export default App
