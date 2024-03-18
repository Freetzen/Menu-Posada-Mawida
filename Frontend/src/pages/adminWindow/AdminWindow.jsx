import React, { useEffect, useState } from 'react'
import SearchBarAdmin from '../../components/adminUtils/SearchBarAdmin/SearchBarAdmin'
import AdminCard from '../../components/adminUtils/adminCard/AdminCard'
import DetailAdmin from '../../components/adminUtils/detailAdmin/DetailAdmin'
import drinksProvider from '../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../utils/foodProvider/foodProvider'
import dessertsProvider from '../../utils/dessertsProvider/dessertsProvider'
import CreateFood from '../../components/adminUtils/createFood/CreateFood'
import ButtonCreate from '../../components/adminUtils/buttonCreate/ButtonCreate'

const AdminWindow = () => {
    const [categoryToEdit, setCategoryToEdit] = useState('All')
    const [itemstoEdit, setItemstoEdit] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [detailState, setDetailState] = useState({})

    const bringAllData = async () => {
        const drinks = await drinksProvider.getDrinks()
        const meals = await foodProvider.getFood()
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(drinks.concat(meals, desserts))
        setAllProducts(drinks.concat(meals, desserts))
    }
    useEffect(() => {
        bringAllData()
    }, [])
    
    return (
      <div>
        <SearchBarAdmin
          allProducts={allProducts}
          setCategoryToEdit={setCategoryToEdit}
          setItemstoEdit={setItemstoEdit}
          setDetailState={setDetailState}
          itemstoEdit={itemstoEdit}
        />
        <div>
          {detailState.name ? (
            <DetailAdmin
              detailState={detailState}
              categoryToEdit={categoryToEdit}
              setDetailState={setDetailState}
              setItemstoEdit={setItemstoEdit}
            />
          ) : detailState === "create" ? (
            <ButtonCreate />
          ) : (
            <div>
              <div>
                <p>Nombre</p>
                <p>Estado</p>
                <p>Categoria</p>
                <p>Precio</p>
              </div>
              <div>
                {itemstoEdit.map((item) => (
                  <AdminCard
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    stock={item.stock}
                    productype={item.productype}
                    category={item.category}
                    accompaniment={item.accompaniment ? item.accompaniment : ""}
                    description={item.description ? item.description : ""}
                    setDetailState={setDetailState}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
export default AdminWindow