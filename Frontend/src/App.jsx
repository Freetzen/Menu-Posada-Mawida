import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/home/Home'
import Admin from './pages/adminWindow/AdminWindow'
import MainFoodMenu from './pages/mainFoodMenu/MainFoodMenu'
import TeaPage from './pages/teaPage/TeaPage'
import DetailFood from './components/detailFood/DetailFood'
import DetailDrinks from './components/detailDrinks/DetailDrinks'
import DetailDesserts from './components/detailDesserts/DetailDesserts'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/admin' element={  <Admin/>  } />
        <Route path='/foodMenu' element={ <MainFoodMenu/> } />
        <Route path='/teapage' element={  <TeaPage/>  } />
        <Route path='/mealdetail/:id' element={ <DetailFood/> } />
        <Route path='/drinkdetail/:id' element={  <DetailDrinks/> } />
        <Route path='/dessertdetail/:id' element={  <DetailDesserts/> } />
      </Routes>
    </>
  )
}

export default App
