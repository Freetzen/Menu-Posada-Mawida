import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import drinksProvider from '../../../utils/drinksProvider/drinksProvider'
import foodProvider from '../../../utils/foodProvider/foodProvider'
import dessertsProvider from '../../../utils/dessertsProvider/dessertsProvider'
import { Box, Button, Flex, Image, Input, Select } from '@chakra-ui/react'
import mawidaLogo from "./../../../../public/img/mawida.png"; 

const SearchBarAdmin = ({ setCategoryToEdit, setItemstoEdit, setDetailState, itemstoEdit, allProducts }) => {

    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    const getAllproducts = async () => {
        setDetailState({})
        const drinks = await drinksProvider.getDrinks()
        const meals = await foodProvider.getFood()
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(drinks.concat(meals, desserts))
        setCategoryToEdit('All')
    }
    const getDrinks = async () => {
        setDetailState({})
        const drinks = await drinksProvider.getDrinks()
        setItemstoEdit(drinks)
        setCategoryToEdit('drinks')
    }
    const getMeals = async () => {
        setDetailState({})
        const meals = await foodProvider.getFood()
        setItemstoEdit(meals)
        setCategoryToEdit('food')
    }
    const getDesserts = async () => {
        setDetailState({})
        const desserts = await dessertsProvider.getDesserts()
        setItemstoEdit(desserts)
        setCategoryToEdit('dessert')
    }
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    const searchProducts = () => {
        const updatedItems = itemstoEdit.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        if (!updatedItems.length) {
            Swal.fire({
                icon: "error",
                title: "No existen coincidencias con ese nombre",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'center',
                }
            });
        }
        else setItemstoEdit(updatedItems)

    }
    const handleClick = () => {
        if (searchValue === '') {
            Swal.fire({
                icon: "error",
                title: "Debes ingresar el nombre de un producto",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'center',
                }
            });
        }
        else {
            searchProducts()
        }
        setSearchValue('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    const handlePost = () => {
        setDetailState('create')
    }

    const handleDestroy = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <Box h={'auto'} p={'50px 0px'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={5} bg={'#412a28'}>
            <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}><Image src={mawidaLogo} w={'300px'}></Image></Flex>
            <Flex w={{base:'auto', xs:'auto', sm:'20%', xl:'10%'}}>
                <Select placeholder='Select option' color={'white'} onChange={(e) => {
                    const selectedOption = e.target.value;
                    if (selectedOption === 'option1') getAllproducts();
                    else if (selectedOption === 'option2') getDrinks();
                    else if (selectedOption === 'option3') getMeals();
                    else if (selectedOption === 'option4') getDesserts();
                    else if (selectedOption === 'option5') handlePost();
                }}>
                    <option style={{color: 'black'}} value='option1'>Todos</option>
                    <option style={{color: 'black'}}value='option2'>Bebidas</option>
                    <option style={{color: 'black'}}value='option3'>Comidas</option>
                    <option style={{color: 'black'}}value='option4'>Postres</option>
                    <option style={{color: 'black'}}value='option5'>Crear</option>
                </Select>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Input
                    borderRightRadius={'none'}
                    color={'white'}
                    w={{base:'auto' ,xl:'300px'}}
                    type="text"
                    name='search'
                    placeholder='Ingrese nombre del producto'
                    value={searchValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={handleClick} borderLeftRadius={'none'} fontWeight={400} >Buscar</Button>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Button onClick={handleDestroy} borderLeftRadius={'none'} fontWeight={400} >Cerrar Sesión</Button>
            </Flex>

        </Box>
    )
}
export default SearchBarAdmin;
