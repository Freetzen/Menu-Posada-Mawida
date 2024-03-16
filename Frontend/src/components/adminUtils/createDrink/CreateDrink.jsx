import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import drinksProvider from "../../../utils/drinksProvider/drinksProvider";

const CreateDrink = () => {
  const [currentArray, setCurrentArray] = useState([
    "frigobar",
    "media tarde",
    "almuerzo",
    "desayuno",
  ]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: [],
  });

  const handleCategoriesChange = (e) => {
    const { value } = e.target;

    const updatedArray = currentArray.filter(
      (item) => !product.category.includes(item)
    );
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
    const { value, name } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const create = await drinksProvider.postDrinks(product);
    console.log(create)
    if (!create.error) {
      setProduct({
        name: "",
        price: "",
        description: "",
        image: "",
        category: [],
      });
      Swal.fire({
        icon: "success",
        title: "Bebida creada correctamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "center",
        },
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
  };

  const selectCategoryOptions = () => {
    const updatedArray = currentArray.filter(
      (item) => !product.category.includes(item)
    );
    setCurrentArray(updatedArray);
  };

  useEffect(() => {
    selectCategoryOptions();
  }, [product.category]);

  return (
    <div>
      <h2>Crear Comida</h2>

      <form onSubmit={handleSubmit}>
        <label>* Nombre: </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre del postre"
        />

        <label>Descripción: </label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Descripción"
        />

        <label>Precio: </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Ejemplo: 4500"
        />

        <label>Categorias: </label>
        <select name="category" onChange={handleCategoriesChange}>
          <option value=""></option>
          {currentArray.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <div>
          {product.category.map((item) => (
            <div key={item}>
              <p value={item}>{item}</p>
              <button value={item} onClick={handleXClick}>
                x
              </button>
            </div>
          ))}
        </div>

        <label htmlFor="">Imagen</label>
        <input type="text" />

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateDrink;
