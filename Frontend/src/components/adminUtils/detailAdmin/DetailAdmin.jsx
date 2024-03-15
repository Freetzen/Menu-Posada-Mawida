import React, { useEffect, useState } from 'react'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider';
import foodProvider from '../../../utils/foodProvider/foodProvider';
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider';
import Swal from 'sweetalert2'

const DetailAdmin = ({ setDetailState, detailState, categoryToEdit, setItemstoEdit }) => {
    const [product, setProduct] = useState({
        id: detailState.id,
        name: detailState.name,
        accompaniment: detailState.accompaniment,
        category: detailState.category,
        description: detailState.description,
        price: detailState.price,
        stock: detailState.stock
    })
    const [currentArray, setCurrentArray] = useState(['frigobar', 'media tarde', 'almuerzo', 'desayuno'])

    const selectCategoryOptions = () => {
        const updatedArray = currentArray.filter(item => !product.category.includes(item));
        setCurrentArray(updatedArray);
    }
    const handleCategoriesChange = (e) => {
        const { value } = e.target
        setProduct({
            ...product,
            category: [...product.category, value]
        })
    }

    useEffect(() => {
        selectCategoryOptions()
    }, [product.category])


    const handleXClick = (e) => {
        const { value } = e.target
        const result = product.category.filter(item => item !== value)
        setProduct({
            ...product,
            category: result
        })
        setCurrentArray([...currentArray, value])
    }

    const handleCancelClick = () => {
        setDetailState({})
    }
    const handleSaveClick = async () => {
        try {
            if (detailState.productype === 'drinks') {
                await drinksProvider.putDrinks(product);
                const drinks = await drinksProvider.getDrinks()
                setItemstoEdit(drinks)
            }
            if (detailState.productype === 'food') {
                await foodProvider.putFood(product);
                const meals = await foodProvider.getFood()
                setItemstoEdit(meals)
            }
            if (detailState.productype === 'dessert') {
                await dessertsProvider.putDesserts(product);
                const desserts = await dessertsProvider.getDesserts()
                setItemstoEdit(desserts)
            }
        } catch (error) {
            console.log(error.message)
        }

        Swal.fire({
            icon: "success",
            title: "El producto ha sido editado",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'center',
            }
        });

        setDetailState({})
    }

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <label>Nombre: </label>
            <input
                type="text"
                name='name'
                placeholder={product.name}
                value={product.name}
                onChange={handleChange}
            />
            <br />

            <label>Precio: </label>
            <input
                type="number"
                name='price'
                placeholder={product.price}
                value={product.price}
                onChange={handleChange}
            />
            <br />

            <label>Estado: </label>
            <select
                name="stock"
                onChange={handleChange}
                value={product.stock}>
                <option value={false} key="false">Inactivo</option>
                <option value={true} key="true">Activo</option>
            </select>
            <br />

            <label>Categorias: </label>
            <select
                name="category"
                onChange={handleCategoriesChange}
            >
                <option value=""></option>
                {currentArray.map(item =>
                    <option value={item} key={item}>{item}</option>
                )}
            </select>
            <div>
                {product.category.map(item =>
                (<div key={item}>
                    <p value={item}>{item}</p>
                    <button value={item} onClick={handleXClick}>x</button>
                </div>)
                )}
            </div>

            {
                product.accompaniment !== ''
                    ?
                    <div>
                        <label>Acompañamientos: </label>
                        <textarea
                            type="text"
                            name='accompaniment'
                            placeholder={product.accompaniment}
                            value={product.accompaniment}
                            cols="60"
                            rows="2"
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    : null
            }
            {
                product.description !== ''
                    ?
                    <div>
                        <label>Descripción: </label>
                        <textarea
                            type="text"
                            name='description'
                            placeholder={product.description}
                            value={product.description}
                            cols="60"
                            rows="2"
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    : null
            }

            <button onClick={handleCancelClick}>Cancelar</button>
            <button onClick={handleSaveClick}>Guardar</button>
        </div>
    )
}

export default DetailAdmin