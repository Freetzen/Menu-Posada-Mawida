import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/home/Home'
import Admin from './pages/adminWindow/AdminWindow'
import MainFoodMenu from './pages/mainFoodMenu/MainFoodMenu'
import TeaPage from './pages/teaPage/TeaPage'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/foodMenu' element={<MainFoodMenu />} />
        <Route path='/teapage' element={<TeaPage />} />
        <Route path='/mealdetail/:id' element={'Aqui va el componente detail de los platos'} />
        <Route path='/drinkdetail/:id' element={'Aqui va el componente detail de las drinks'} />
        <Route path='/dessertdetail/:id' element={'Aqui va el componente detail de los desserts'} />
      </Routes>
    </>
  )
}

export default App
