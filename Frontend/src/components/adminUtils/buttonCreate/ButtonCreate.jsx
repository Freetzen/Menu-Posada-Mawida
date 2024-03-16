import { useState } from 'react'
import CreateFood from '../createFood/CreateFood'
import CreateDrink from '../createDrink/CreateDrink'
import CreateDessert from '../createDessert/CreateDessert'

const ButtonCreate = () => {

    const [selectOption, setSelectOption] = useState('')

const handleClick = (e) => {
    setSelectOption(e.target.name)

}

  return (
    <div>
      <h2>¿Que desea crear?</h2>

      <div>
        <button name="comida" onClick={handleClick}>
          Comida
        </button>
        <button name="bebida" onClick={handleClick}>
          Bebida
        </button>
        <button name="postre" onClick={handleClick}>
          Postre
        </button>
      </div>

      <div>
        {selectOption === "comida" ? (
          <CreateFood />
        ) : selectOption === "bebida" ? (
          <CreateDrink />
        ) : selectOption === "postre" ? (
          <CreateDessert />
        ) : null}
      </div>
    </div>
  );
}

export default ButtonCreate