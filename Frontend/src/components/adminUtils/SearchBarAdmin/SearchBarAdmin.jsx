import React from 'react'
import { NavLink } from 'react-router-dom'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../../utils/foodProvider/foodProvider'

const SearchBarAdmin = ({ setCategoryToEdit, setItemstoEdit }) => {

    const getDrinks = async () => {
        const drinks = await drinksProvider.getDrinks()
        setItemstoEdit(drinks)
        setCategoryToEdit('drinks')
    }
    const getMeals = async () => {
        const meals = await foodProvider.getFood()
        setItemstoEdit(meals)
        setCategoryToEdit('food')
    }

    return (
        <div>
            <button onClick={getDrinks}>Bebidas</button>
            <button onClick={getMeals}>Comidas</button>
            <button onClick={getDrinks}>Postres</button>
        </div>
    )
}
export default SearchBarAdmin