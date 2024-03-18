import { Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const MealsCard = (props) => {
    return (
        <Box  display={'flex'} flexDirection={'column'} textAlign={'center'}>
            <NavLink to={`/mealdetail/${props.id}`}>
                <Text>{props.name}</Text>
                <Text>{props.accompaniment ? props.accompaniment : ''}</Text>
                <Text>$ {props.price}</Text>
            </NavLink>
        </Box>
    )
}

export default MealsCard