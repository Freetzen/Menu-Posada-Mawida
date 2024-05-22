import { useEffect, useState } from 'react'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider';
import foodProvider from '../../../utils/foodProvider/foodProvider';
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider';
import Swal from 'sweetalert2'
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const DetailAdmin = ({ setDetailState, detailState, setItemstoEdit }) => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        id: detailState._id,
        name: detailState.name,
        accompaniment: detailState.accompaniment,
        category: detailState.category,
        productype: detailState.productype,
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
    const handleDeleteClick = async() => {
        try {
            const swal = await Swal.fire({
                title: "¿Seguro deseas eliminar el producto seleccionado?",
                text: "*",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar"
            })

            if(swal.isConfirmed){

                if(product.productype === 'drinks'){
                    const deleteProduct = await drinksProvider.deleteDrinkById(product.id)
                    if(deleteProduct.deleted){
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "success"
                        });
                        const meals = await foodProvider.getFood()
                        setItemstoEdit(meals)
                    }else{
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "warning"
                        });
                    }
                }
                if(product.productype === 'food'){
                    const deleteProduct = await foodProvider.deleteFoodById(product.id)
                    if(deleteProduct.deleted){
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "success"
                        });
                        const meals = await foodProvider.getFood()
                        setItemstoEdit(meals)
                    }else{
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "warning"
                        });
                    }
                }
                if(product.productype === 'dessert'){
                    const deleteProduct = await dessertsProvider.deleteDessertById(product.id)
                    if(deleteProduct.deleted){
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "success"
                        });
                        const meals = await foodProvider.getFood()
                        setItemstoEdit(meals)
                    }else{
                        Swal.fire({
                            title: `${deleteProduct.message}`,
                            icon: "warning"
                        });
                    }
                }
            }
            setDetailState({})
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'auto'} p={'50px 0px'} >
        <FormControl display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={5} borderRadius={'30px'}
         alignItems={'center'} h={'auto'} w={{base:'90%', sm:'90%', md:'90%', lg:'60%', xl:'40%'}} bg={'#A98467'} p={'30px 30px'}>
            <FormLabel color={'white'} fontSize={'xl'}>Nombre </FormLabel>
            <Input
                bg={'white'}
                type="text"
                name='name'
                placeholder={product.name}
                value={product.name}
                onChange={handleChange}
            />

            <FormLabel color={'white'} fontSize={'xl'}>Precio </FormLabel>
            <Input
             bg={'white'}
                type="number"
                name='price'
                placeholder={product.price}
                value={product.price}
                onChange={handleChange}
            />

            <FormLabel color={'white'} fontSize={'xl'}>Estado </FormLabel>
            <Select
             bg={'white'}
                name="stock"
                onChange={handleChange}
                value={product.stock}>
                <option value={false} key="false">Inactivo</option>
                <option value={true} key="true">Activo</option>
            </Select>

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
            <Box w={'100%'} h={{base:'auto' , xl:'100px'}} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} alignItems={'center'} gap={3}>
                {product.category.map(item =>
                (<Flex key={item} w={'auto'} >
                    <Button _hover={'none'} bg={'#412a28'} color={'white'} value={item} onClick={handleXClick}>{item} x</Button>
                </Flex>)
                )}
            </Box>

            {
                product.accompaniment !== ''
                    ?
                    <>
                        <FormLabel color={'white'}>Acompañamientos: </FormLabel>
                        <Textarea
                            bg={'white'}
                            type="text"
                            name='accompaniment'
                            placeholder={product.accompaniment}
                            value={product.accompaniment}
                            cols="60"
                            rows="2"
                            onChange={handleChange}
                        />
                    </>
                    : null
            }
            {
                product.description !== ''
                    ?
                    <>
                        <FormLabel color={'white'}>Descripción: </FormLabel>
                        <Textarea
                            bg={'white'}
                            type="text"
                            name='description'
                            placeholder={product.description}
                            value={product.description}
                            cols="60"
                            rows="2"
                            onChange={handleChange}
                        />
                    </>
                    : null
            }

            <Flex gap={5}>
                <Button bg={'#412a28'} color={'white'} onClick={handleCancelClick}>Cancelar</Button>
                <Button bg={'#412a28'} color={'white'} onClick={handleSaveClick}>Guardar</Button>
                <Button bg={'#412a28'} color={'white'} onClick={handleDeleteClick}>Eliminar</Button>
            </Flex>
        </FormControl>
        </Box>
    )
}

export default DetailAdmin