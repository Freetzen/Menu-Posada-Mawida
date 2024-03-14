import React from 'react'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../../utils/foodProvider/foodProvider'
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider'
import { NavLink } from 'react-router-dom'

const SearchBarAdmin = ({ setCategoryToEdit, setItemstoEdit, setDetailState }) => {

    const getDrinks = async () => {
        setDetailState({})
        const drinks = await drinksProvider.getDrinks()
        setItemstoEdit(drinks)
        setCategoryToEdit('drinks')
    }
    const getMeals = async () => {
        setDetailState({})
        const meals = await foodProvider.getFood()
        setItemstoEdit(meals)
        setCategoryToEdit('food')
    }
    const getDesserts = async () => {
        setDetailState({})
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(desserts)
        setCategoryToEdit('dessert')
    }

    return (
        <div>
            <input
                type="text"

            />
            <button >Buscar</button>
            <button onClick={getDrinks}>Bebidas</button>
            <button onClick={getMeals}>Comidas</button>
            <button onClick={getDesserts}>Postres</button>
            <NavLink to='/create'>
                <button >Crear</button>
            </NavLink>
        </div>
    )
}
export default SearchBarAdmin