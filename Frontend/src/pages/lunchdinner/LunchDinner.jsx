import { useEffect, useState } from 'react'
import foodProvider from '../../utils/foodProvider/foodProvider'
import drinksProvider from '../../utils/drinksProvider/drinksProvider'
import MealsCard from '../../components/mealsCard/MealsCard'
import DrinksCard from '../../components/drinksCard/DrinksCard'
import NavBar from '../../components/navBar/NavBar'
import { Box, Flex, Text } from '@chakra-ui/react'

const LunchDinner = () => {
    const currentCategory = 'almuerzo'
    const [drinks, setDrinks] = useState([])
    const [meals, setMeals] = useState([])


    useEffect(() => {
        const bringMeals = async () => {
            const mealsBD = await foodProvider.getFood()
            const mealsTea = mealsBD.filter(item => item.category.includes(currentCategory))
            setMeals(mealsTea)
        }

        const bringDesserts = async () => {
            const mealsBD = await foodProvider.getFood()
            const mealsTea = mealsBD.filter(item => item.category.includes(currentCategory))
            setMeals(mealsTea)
        }

        const bringDrinks = async () => {
            const drinksBD = await drinksProvider.getDrinks();
            const drinksTea = drinksBD.filter(item => item.category.includes(currentCategory))
            setDrinks(drinksTea)
        }

        bringDrinks()
        bringMeals()
        bringDesserts()
    }, [])
    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} h={'auto'} p={'100px 0px'}>
        <NavBar/>
            <Flex flexWrap={'wrap'} justifyContent={'center'} alignContent={'center'} gap={20} p={'20px 30px'} w={'100%'} h={'auto'}>
                <Box w={'auto'} p={'30px'} display={'flex'} flexDirection={'column'} gap={10}>
                    <Text as={'h2'} fontSize={'2xl'} textAlign={'center'}>Meals</Text>
                    {
                        meals.map(item => (
                            <MealsCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                accompaniment={item.accompaniment}
                            />
                        ))
                    }
                </Box>
                <Box w={'auto'} p={'30px 100px'} display={'flex'} flexDirection={'column'} gap={10}>
                    <Text as={'h2'} fontSize={'2xl'} textAlign={'center'}>Drinks</Text>
                    {
                        drinks.map(item => (
                            <DrinksCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    }
                </Box>
            </Flex>
            <NavBar/>


        </Flex>
    )
}

export default LunchDinner