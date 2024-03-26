import { useState } from 'react'
import CreateFood from '../createFood/CreateFood'
import CreateDrink from '../createDrink/CreateDrink'
import CreateDessert from '../createDessert/CreateDessert'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

const ButtonCreate = () => {

    const [selectOption, setSelectOption] = useState('')

const handleClick = (e) => {
    setSelectOption(e.target.name)

}

  return (
    <Box h={'auto'}>
      <Flex py={'50px'} justifyContent={'center'}>
        <Text as={'h2'} fontSize={'5xl'} fontWeight={500} color={'#412A28'} textAlign={'center'}>¿Que desea crear?</Text>
      </Flex>

      <Flex py={'30px'} justifyContent={'center'} gap={5}>
        <Button name="comida" onClick={handleClick} bg={'#412A28'} color={'white'} _hover={'none'}>
          Comida
        </Button>
        <Button name="bebida" onClick={handleClick} bg={'#412A28'} color={'white'} _hover={'none'}>
          Bebida
        </Button>
        <Button name="postre" onClick={handleClick} bg={'#412A28'} color={'white'} _hover={'none'}>
          Postre
        </Button>
      </Flex>

      <Flex>
        {selectOption === "comida" ? (
          <CreateFood />
        ) : selectOption === "bebida" ? (
          <CreateDrink />
        ) : selectOption === "postre" ? (
          <CreateDessert />
        ) : null}
      </Flex>
    </Box>
  );
}

export default ButtonCreate