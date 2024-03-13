import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <h2>Main Menu</h2>
                <NavLink to='/lunchdinner'>
                    <button>Lunch/Dinner</button>
                </NavLink>
                <NavLink to='/barfridge'>
                    <button>Bar Fridge</button>
                </NavLink>
                <NavLink to='/tea'>
                    <button>Tea</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home