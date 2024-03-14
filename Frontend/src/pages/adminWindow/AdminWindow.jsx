import React, { useState } from 'react'
import SearchBarAdmin from '../../components/adminUtils/SearchBarAdmin/SearchBarAdmin'
import AdminCard from '../../components/adminUtils/adminCard/AdminCard'
import DetailAdmin from '../../components/adminUtils/detailAdmin/DetailAdmin'
import CreateProduct from '../../components/adminUtils/crateProduct/CreateProduct'

const AdminWindow = () => {
    const [categoryToEdit, setCategoryToEdit] = useState('')
    const [itemstoEdit, setItemstoEdit] = useState([])
    const [detailState, setDetailState] = useState({})

    console.log('items', itemstoEdit);
    console.log('categorias', categoryToEdit);
    console.log('detail', detailState);
    return (
        <div>
            <SearchBarAdmin setCategoryToEdit={setCategoryToEdit} setItemstoEdit={setItemstoEdit} setDetailState={setDetailState} />
            <div>
                {
                    detailState.name
                        ?
                        <DetailAdmin detailState={detailState} categoryToEdit={categoryToEdit} setDetailState={setDetailState} />
                        : categoryToEdit !== ''
                            ?
                            <div>
                                <div>
                                    <p>Nombre</p>
                                    <p>Estado</p>
                                    <p>Categoria</p>
                                    <p>Precio</p>
                                </div>
                                <div>
                                    {itemstoEdit.map(item => (
                                        <AdminCard
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            price={item.price}
                                            stock={item.stock}
                                            category={item.category}
                                            accompaniment={item.accompaniment ? item.accompaniment : ''}
                                            description={item.description ? item.description : ''}
                                            setDetailState={setDetailState}
                                        />
                                    ))}
                                </div>
                            </div>

                            : <div ><h3>No se han seleccionado categorias</h3></div>
                }
            </div>
            <CreateProduct />
        </div>
    )
}
export default AdminWindow