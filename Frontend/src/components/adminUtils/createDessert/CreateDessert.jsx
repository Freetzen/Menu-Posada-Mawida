import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider';

const CreateDessert = () => {

  const [currentArray, setCurrentArray] = useState(['frigobar', 'media tarde', 'almuerzo', 'desayuno'])

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: []
  })

  const handleCategoriesChange = (e) => {
    const { value } = e.target;

    const updatedArray = currentArray.filter(item => !product.category.includes(item));
        setCurrentArray(updatedArray);
        
    setProduct({
      ...product,
      category: [...product.category, value],
    });
  };

  const handleXClick = (e) => {
    const { value } = e.target;
    const result = product.category.filter((item) => item !== value);
    setProduct({
      ...product,
      category: result,
    });
    setCurrentArray([...currentArray, value]);
  };

  const handleChange = (e) => {
    const {value, name} = e.target

    setProduct({
      ...product,
      [name]: value

    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const create = await dessertsProvider.postDesserts(product)
    if(!create.error){
      setProduct({
        name: '',
        price: '',
        image: '',
        category: []
      })

      Swal.fire({
        icon: "success",
        title: `${create.error}`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'center',
        }
    });
    }else{
      Swal.fire({
        icon: "error",
        title: `${create.error}`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "center",
        },
      });
    }

  }

  const selectCategoryOptions = () => {
    const updatedArray = currentArray.filter(item => !product.category.includes(item));
    setCurrentArray(updatedArray);
}

  useEffect(() => {
    selectCategoryOptions()
}, [product.category])


  return (
    <div>

      <h2>Crear Comida</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input 
        type="text" 
        name='name'
        value={product.name}
        onChange={handleChange}
        placeholder='Nombre del postre'
        />

        <label>Precio: </label>
        <input 
        type="number" 
        name='price'
        value={product.price}
        onChange={handleChange}
        placeholder='Ejemplo: 4500'
        />

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

        <label htmlFor="">Imagen</label>
        <input type="text" />

        <button type='submit'>Crear</button>

      </form>

    </div>
  )
}

export default CreateDessert