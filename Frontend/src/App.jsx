import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/home/Home'
import Admin from './pages/adminWindow/AdminWindow'
import TeaPage from './pages/teaPage/TeaPage'
import DetailFood from './components/detailFood/DetailFood'
import DetailDrinks from './components/detailDrinks/DetailDrinks'
import DetailDesserts from './components/detailDesserts/DetailDesserts'
import Login from './components/login/Login'
import LunchDinner from './pages/lunchdinner/LunchDinner'
import BarFridge from './pages/barFridge/BarFridge'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
axios.defaults.baseURL = 'https://menu-posada-mawida.onrender.com'

const urlLogin = import.meta.env.VITE_URL_LOGIN
const urlAdmin = import.meta.env.VITE_URL_ADMIN
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={urlLogin} element={<Login />} />

        <Route element={<ProtectedRoute/>}>
        <Route path={urlAdmin} element={<Admin />} /> {/* RUTA DEL ADMINISTRADOR */}
        </Route>
        
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
