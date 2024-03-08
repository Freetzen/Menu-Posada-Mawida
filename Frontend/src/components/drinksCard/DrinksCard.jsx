import React from 'react'

const DrinksCard = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.image ? props.image : 'Default image'}</p>
            <p>$ {props.price}</p>
        </div>
    )
}

export default DrinksCard