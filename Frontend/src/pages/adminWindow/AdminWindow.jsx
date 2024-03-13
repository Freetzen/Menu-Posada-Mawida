import React, { useState } from 'react'
import SearchBarAdmin from '../../components/adminUtils/SearchBarAdmin/SearchBarAdmin'
import AdminCards from '../../components/adminUtils/adminCards/AdminCards'
import DrinksCard from '../../components/drinksCard/DrinksCard'
import MealsCard from '../../components/mealsCard/MealsCard'

const AdminWindow = () => {
    const [categoryToEdit, setCategoryToEdit] = useState('')
    const [itemstoEdit, setItemstoEdit] = useState([])

    console.log('items', itemstoEdit);
    console.log('categorias', categoryToEdit);
    return (
        <div>
            <SearchBarAdmin setCategoryToEdit={setCategoryToEdit} setItemstoEdit={setItemstoEdit} />
            {
                categoryToEdit === 'drinks'
                    ? itemstoEdit.map(item => (
                        <DrinksCard
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                    : categoryToEdit === 'food'
                        ? itemstoEdit.map(item => (
                            <MealsCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                accompaniment={item.accompaniment}
                            />
                        ))
                        : categoryToEdit === 'dessert'
                            ? itemstoEdit.map(item => (
                                <MealsCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    price={item.price}
                                    accompaniment={item.accompaniment}
                                />
                            ))
                            : <div ><h3>No se han seleccionado items</h3></div>
            }
        </div>
    )
}

export default AdminWindow