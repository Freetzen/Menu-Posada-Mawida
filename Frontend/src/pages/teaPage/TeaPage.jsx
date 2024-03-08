import React, { useEffect, useState } from 'react'
import drinksProvider from '../../utils/drinksProvider/drinksProvider';
import DrinksCard from '../../components/drinksCard/DrinksCard';
import foodProvider from '../../utils/foodProvider/foodProvider';
import MealsCard from '../../components/mealsCard/MealsCard';
import { NavLink } from 'react-router-dom';

const TeaPage = () => {
    const currentCategory = 'tea'
    const [drinks, setDrinks] = useState([])
    const [meals, setMeals] = useState([])

    const bringMeals = async () => {
        const mealsBD = await foodProvider.getFood()
        const mealsTea = mealsBD.filter(item => item.category.includes(currentCategory))
        setMeals(mealsTea)
    }

    const bringDrinks = async () => {
        const drinksBD = await drinksProvider.getDrinks();
        const drinksTea = drinksBD.filter(item => item.category.includes(currentCategory))
        setDrinks(drinksTea)
    }

    useEffect(() => {
        bringDrinks()
        bringMeals()
    }, [])

    return (
        <>
            <div>
                <NavLink to='/'>
                    <button>Back to Menu</button>
                </NavLink>
                <NavLink to='/lunch'>
                    <button>Lunch/Dinner</button>
                </NavLink>
                <NavLink to='/bar'>
                    <button>Bar Fridge</button>
                </NavLink>
            </div>
            <div>
                <div>
                    <h2>Meals</h2>
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
                    <h2>Drinks</h2>
                    {
                        drinks.map(item => (
                            <DrinksCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <NavLink to='/'>
                    <button>Back to Menu</button>
                </NavLink>
                <NavLink to='/lunch'>
                    <button>Lunch/Dinner</button>
                </NavLink>
                <NavLink to='/bar'>
                    <button>Bar Fridge</button>
                </NavLink>
            </div>
        </>
    )
}

export default TeaPage