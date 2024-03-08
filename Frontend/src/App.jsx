import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/home/Home'
import AdminWindow from './pages/adminWindow/AdminWindow'
import TeaPage from './pages/teaPage/TeaPage'
import DetailFood from './components/detailFood/DetailFood'
import DetailDrinks from './components/detailDrinks/DetailDrinks'
import DetailDesserts from './components/detailDesserts/DetailDesserts'
import BarFridge from './pages/barFridge/BarFridge'
import LunchDinner from './pages/lunchdinner/LunchDinner'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminWindow />} />
        <Route path='/lunchdinner' element={<LunchDinner />} />
        <Route path='/barfridge' element={<BarFridge />} />
        <Route path='/tea' element={<TeaPage />} />
        <Route path='/mealdetail/:id' element={<DetailFood />} />
        <Route path='/drinkdetail/:id' element={<DetailDrinks />} />
        <Route path='/dessertdetail/:id' element={<DetailDesserts />} />
      </Routes>
    </>
  )
}

export default App
