import React from 'react'
import { NavLink } from 'react-router-dom'

const DessertsCard = (props) => {
  return (
    <div>
            <NavLink to={`/dessertdetail/${props.id}`}>
                <div>
                    <p>{props.name}</p>
                    <img src={props.image} />
                    <p>$ {props.price}</p>
                </div>
            </NavLink>
        </div>
  )
}

export default DessertsCard