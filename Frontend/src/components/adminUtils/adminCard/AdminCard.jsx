import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminCard = (props) => {
    const handleClick = () => {
        props.setDetailState(props)
    }
    return (
        <div>
            <NavLink onClick={() => handleClick()}>
                <p>{props.name}</p>
                <p>{props.stock ? 'Activo' : 'Inactivo'}</p>
                <p>{props.category.join(', ')}</p>
                <p>$ {props.price}</p>
            </NavLink>
        </div>
    )
}

export default AdminCard