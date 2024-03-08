import React from 'react'
import { NavLink } from 'react-router-dom'

const DrinksCard = (props) => {
    return (
        <div>
            <NavLink to={`/drinkdetail/${props.id}`}>
                <div>
                    <p>{props.name}</p>
                    <img src={props.image} />
                    <p>$ {props.price}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default DrinksCard