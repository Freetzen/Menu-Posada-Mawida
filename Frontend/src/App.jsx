import './App.css'
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
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/backofficepm' element={ <Login/> } />
        <Route path='/backofficepmadmin' element={ <Admin/>  } />
        <Route path='/foodMenu' element={ <LunchDinner/> } />
        <Route path='/teapage' element={  <TeaPage/>  } />
        <Route path='/mealdetail/:id' element={ <DetailFood/> } />
        <Route path='/drinkdetail/:id' element={  <DetailDrinks/> } />
        <Route path='/dessertdetail/:id' element={  <DetailDesserts/> } />
      </Routes>
    </>
  )
}

export default App
