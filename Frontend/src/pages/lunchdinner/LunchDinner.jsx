import React, { useEffect, useState } from 'react'
import foodProvider from '../../utils/foodProvider/foodProvider'
import drinksProvider from '../../utils/drinksProvider/drinksProvider'
import { NavLink } from 'react-router-dom'
import MealsCard from '../../components/mealsCard/MealsCard'
import DrinksCard from '../../components/drinksCard/DrinksCard'
import NavBar from '../../components/navBar/NavBar'
import dessertsProvider from '../../utils/dessertsProvider/dessertsProvider'
import DessertsCard from '../../components/dessertsCard/DessertsCard'

const LunchDinner = () => {
    const currentCategory = 'almuerzo'
    const [drinks, setDrinks] = useState([])
    const [meals, setMeals] = useState([])
    const [desserts, setDesserts] = useState([])


    useEffect(() => {
        const bringMeals = async () => {
            const mealsBD = await foodProvider.getFood()
            const mealsTea = mealsBD.filter(item => item.category.includes(currentCategory))
            setMeals(mealsTea)
        }

        const bringDesserts = async () => {
            const dessertsBD = await dessertsProvider.getDesserts()
            const dessertsTea = dessertsBD.filter(item => item.category.includes(currentCategory))
            setDesserts(dessertsTea)
        }

        const bringDrinks = async () => {
            const drinksBD = await drinksProvider.getDrinks();
            const drinksTea = drinksBD.filter(item => item.category.includes(currentCategory))
            setDrinks(drinksTea)
        }

        bringDrinks()
        bringMeals()
        bringDesserts()
    }, [])
    return (
        <>
            <NavBar/>
            <div>
                <div>
                    <h2>Almuerzo / Cena</h2>
                    {
                        meals.map(item => (
                            <MealsCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                accompaniment={item.accompaniment}
                            />
                        ))
                    }
                </div>
                <div>
                    <h2>Postres</h2>
                    {
                        desserts.map(item => (
                            <DessertsCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div>
                    <h2>Bebidas</h2>
                    {
                        drinks.map(item => (
                            <DrinksCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
            <NavBar/>


        </>
    )
}

export default LunchDinner