import React from 'react'
import { NavLink } from 'react-router-dom'

const MealsCard = (props) => {
    return (
        <div>
            <NavLink to={`/mealdetail/${props.id}`}>
                <p>{props.name}</p>
                <p>$ {props.price}</p>
                <p>{props.accompaniment ? props.accompaniment : ''}</p>
            </NavLink>
        </div>
    )
}

export default MealsCard