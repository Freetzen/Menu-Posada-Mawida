import React, { useState } from 'react'
import Swal from 'sweetalert2'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../../utils/foodProvider/foodProvider'
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider'

const SearchBarAdmin = ({ setCategoryToEdit, setItemstoEdit, setDetailState, itemstoEdit, allProducts }) => {

    const [searchValue, setSearchValue] = useState('')

    const getAllproducts = async () => {
        setDetailState({})
        const drinks = await drinksProvider.getDrinks()
        const meals = await foodProvider.getFood()
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(drinks.concat(meals, desserts))
        setCategoryToEdit('All')
    }
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
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    const searchProducts = () => {
        const updatedItems = itemstoEdit.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        if (!updatedItems.length) {
            Swal.fire({
                icon: "error",
                title: "No existen coincidencias con ese nombre",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'center',
                }
            });
        }
        else setItemstoEdit(updatedItems)

    }
    const handleClick = () => {
        if (searchValue === '') {
            Swal.fire({
                icon: "error",
                title: "Debes ingresar el nombre de un producto",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'center',
                }
            });
        }
        else {
            searchProducts()
        }
        setSearchValue('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <div>
            <input
                type="text"
                name='search'
                placeholder='Ingrese nombre del producto'
                value={searchValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>Buscar</button>
            <button onClick={getAllproducts}>Todos</button>
            <button onClick={getDrinks}>Bebidas</button>
            <button onClick={getMeals}>Comidas</button>
            <button onClick={getDesserts}>Postres</button>
            <button >Crear</button>

        </div>
    )
}
export default SearchBarAdmin