import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import drinksProvider from '../../utils/drinksProvider/drinksProvider'
import DrinksCard from '../../components/drinksCard/DrinksCard'

const BarFridge = () => {
    const currentCategory = 'frigobar'
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        const bringDrinks = async () => {
            const drinksBD = await drinksProvider.getDrinks();
            const drinksTea = drinksBD.filter(item => item.category.includes(currentCategory))
            setDrinks(drinksTea)
        }
        bringDrinks()
    }, [])
    return (
        <>
            <div>
                <NavLink to='/'>
                    <button>Back to Menu</button>
                </NavLink>
                <NavLink to='/lunchdinner'>
                    <button>Lunch/Dinner</button>
                </NavLink>
                <NavLink to='/tea'>
                    <button>Tea</button>
                </NavLink>
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
            <div>
                <NavLink to='/'>
                    <button>Back to Menu</button>
                </NavLink>
                <NavLink to='/lunchdinner'>
                    <button>Lunch/Dinner</button>
                </NavLink>
                <NavLink to='/tea'>
                    <button>Tea</button>
                </NavLink>
            </div>
        </>
    )
}

export default BarFridge