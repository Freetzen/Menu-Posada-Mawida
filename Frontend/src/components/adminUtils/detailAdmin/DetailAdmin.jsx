import React, { useState } from 'react'

const DetailAdmin = ({ setDetailState, detailState }) => {
    const [product, setProduct] = useState({
        name: detailState.name,
        accompaniment: detailState.accompaniment,
        category: detailState.category,
        description: detailState.description,
        id: detailState.id,
        price: detailState.price,
        stock: detailState.stock
    })
    const initArray = ['frigobar', 'media tarde', 'almuerzo', 'desayuno']
    const [currentArray, setCurrentArray] = useState([])

    const selectOptions = () => {
        const filteredOptions = detailState.category.forEach(element => {
            initArray.filter(item => item !== element)
        });
    }
    const handleXClick = (e) => {
        const { value } = e.target
        console.log('este es value----------', value);
        const result = detailState.category.filter(item => item !== value)
        setProduct({
            ...product,
            category: result
        })
    }
    const handleCancelClick = () => {
        setDetailState({})
    }
    const handleSaveClick = () => {

    }
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    console.log('this is product in detail', product);
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
                onChange={handleChange}
            // value={product.category}
            >
                {initArray.map(item =>
                    <option value={item} key={item}>{item}</option>
                )}
            </select>
            <div>
                {product.category.map(item =>
                    <div key={item}>
                        <p value={item}>{item}</p>
                        <button onClick={handleXClick}>x</button>
                    </div>
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
                            rows="10"
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
                            rows="10"
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