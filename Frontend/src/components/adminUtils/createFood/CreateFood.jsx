import React, { useEffect, useState } from 'react'
import foodProvider from '../../../utils/foodProvider/foodProvider';
import Swal from 'sweetalert2';
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';

const CreateFood = () => {

  const [currentArray, setCurrentArray] = useState(['frigobar', 'media tarde', 'almuerzo', 'desayuno'])

  const [product, setProduct] = useState({
    name: '',
    price: '',
    accompaniment: '',
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

  const handleFileChange = async (e) => {
    const file = e.target.files[0]  
    try {
      const upload = await foodProvider.uploadImage(file)
      setProduct({
        ...product,
        image: upload.secure_url
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const create = await foodProvider.postFood(product)
    if(!create.error){
      setProduct({
        name: '',
        price: '',
        accompaniment: '',
        image: '',
        category: []
      })

      Swal.fire({
        icon: "success",
        title: "Producto creado correctamente",
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
        timer: 2000,
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
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'auto'} p={'50px 0px'} w={'100%'}>
      <FormControl as="form" onSubmit={handleSubmit} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={5} borderRadius={'30px'}
         alignItems={'center'} h={'auto'} w={{base:'90%', sm:'90%', md:'90%', lg:'60%', xl:'40%'}} bg={'#A98467'} p={'30px 30px'}>
          <Flex py={'30px'}>
              <Text textAlign={'center'} as={'h2'} fontSize={'3xl'}>Crear Comida</Text>
          </Flex>
        <FormLabel color={'white'} fontSize={'xl'}>Nombre</FormLabel>
        <Input 
        bg={'white'}
        type="text" 
        name='name'
        value={product.name}
        onChange={handleChange}
        placeholder='Nombre de la comida'
        />

        <FormLabel color={'white'} fontSize={'xl'}>Acompañamiento: </FormLabel>
        <Input 
        bg={'white'}
        type="text" 
        name='accompaniment'
        value={product.accompaniment}
        onChange={handleChange}
        placeholder='Acompañamiento'
        />

        <FormLabel color={'white'} fontSize={'xl'}>Precio: </FormLabel>
        <Input 
        bg={'white'}
        type="number" 
        name='price'
        value={product.price}
        onChange={handleChange}
        placeholder='Ejemplo: 4500'
        />

        <FormLabel color={'white'} fontSize={'xl'}>Categorias: </FormLabel>
            <Select
                bg={'white'}
                name="category"
                onChange={handleCategoriesChange}
            >
                <option value="">Seleccione una categoria</option>
                {currentArray.map(item =>
                    <option value={item} key={item}>{item}</option>
                )}
            </Select>
            <Box w={'100%'} h={{base:'auto' , xl:'50px'}} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} alignItems={'center'} gap={3}>
                {product.category.map(item =>
                (<Flex key={item} w={'auto'}>
                    <Button _hover={'none'} bg={'#412a28'} color={'white'} value={item} onClick={handleXClick}>{item} x</Button>
                </Flex>)
                )}
            </Box>

        <FormLabel htmlFor="" color={'white'} fontSize={'xl'}>Imagen</FormLabel>
        <Input type="file" bg={'white'} onChange={handleFileChange}/>

        <Button bg={'#412a28'} color={'white'} type='submit'>Crear</Button>

      </FormControl>

    </Box>
  )
}

export default CreateFood