import React from 'react'

const MealsCard = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>$ {props.price}</p>
            <p>{props.accompaniment ? props.accompaniment : ''}</p>
        </div>
    )
}

export default MealsCard