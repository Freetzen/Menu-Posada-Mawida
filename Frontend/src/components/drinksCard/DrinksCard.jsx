import React from 'react'
import { NavLink } from 'react-router-dom'

const DrinksCard = (props) => {
    return (
        <div>
            <NavLink to={`/drinkdetail/${props.id}`}>
                <p>{props.name}</p>
                <p>{props.image ? props.image : 'Default image'}</p>
                <p>$ {props.price}</p>
            </NavLink>
        </div>
    )
}

export default DrinksCard