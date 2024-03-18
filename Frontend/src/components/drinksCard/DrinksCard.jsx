import { Box, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const DrinksCard = (props) => {
    return (
        <Box  display={'flex'} flexDirection={'column'} textAlign={'center'}>
            <NavLink to={`/drinkdetail/${props.id}`}>
                    <Text>{props.name}</Text>
                    <Image src={props.image} />
                    <Text>{props.description}</Text>
                    <Text>$ {props.price}</Text>
            </NavLink>
        </Box>
    )
}

export default DrinksCard