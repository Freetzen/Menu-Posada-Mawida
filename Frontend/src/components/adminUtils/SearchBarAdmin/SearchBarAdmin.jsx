import React from 'react'
import { NavLink } from 'react-router-dom'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../../utils/foodProvider/foodProvider'
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider'

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
    const getDesserts = async () => {
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(desserts)
        setCategoryToEdit('dessert')
    }

    return (
        <div>
            <button onClick={getDrinks}>Bebidas</button>
            <button onClick={getMeals}>Comidas</button>
            <button onClick={getDesserts}>Postres</button>
        </div>
    )
}
export default SearchBarAdmin