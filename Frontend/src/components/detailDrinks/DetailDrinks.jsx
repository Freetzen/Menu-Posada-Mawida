import { useParams } from 'react-router-dom';
import drinksProvider from '../../utils/drinksProvider/drinksProvider';
import { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const DetailDrinks = () => {
    const [info, setInfo] = useState({})
    
    const {id} = useParams()

    const getdetail = async () => {
        try {
            const data = await drinksProvider.getDrinkById(id)
            if(data){
              return setInfo(data)
            }else{
              alert('No se encontro el producto')
            }
        }catch(error){
            console.log(error.message);
        }
      };
    
      useEffect(() => {
        getdetail()
      }, [])
      console.log(info)

  return (
    <Box
      w={"100%"}
      h={"auto"}
      className="fontUrbanist"
      display={"flex"}
      flexDir={{ base: "column-reverse", xl: "row" }}
      bg={"#F5EBE3"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={'center'}
        w={{ base: "100%", xl: "50%" }}
        h={{ base: "100%", xl: "100vh" }}
        py={{base:'100px', xl:'0px' }}
        gap={3}
      >
        <Flex flexDirection={'column'} alignItems={'center'}>
          <Text
            className="customText1"
            fontSize={{ base: "4xl", xl: "8xl" }}
            fontWeight={800}
            letterSpacing={"-3px"}
          >
            {info.name}
          </Text>
        </Flex>
        <Flex
          flexDirection={"row"}
          w={"auto"}
          justifyContent={{ base: "center", xl: "start" }}
          gap={2}
        >
          <Text
            fontSize={{ base: "2xl", xl: "3xl" }}
            fontWeight={200}
            letterSpacing={"-2px"}
            className="price"
          >
            Precio:
          </Text>
          <Text
            className="price"
            fontSize={{ base: "2xl", xl: "3xl" }}
            fontWeight={300}
            letterSpacing={'-2px'}
          >
            {info.price}$
          </Text>
        </Flex>
        <Flex mt={"10px"} justifyContent={{ base: "center", xl: "start" }}>
        <NavLink to="/barfridge">
          <Button
            bg={"#212121"}
            color={"white"}
            fontWeight={400}
            _hover={"none"}
          >
            Volver al Menu
          </Button>
          </NavLink>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "100%", xl: "50%" }}
        p={{ base: "20px" }}
        alignItems={"center"}
        justifyContent={"center"}
        borderTopLeftRadius={{ base: "0px", xl: "500px" }}
        borderBottomLeftRadius={{ base: "0px", xl: "500px" }}
        className="background"
      >
        <Image
          src={info.image}
          w={{ base: "200px",  xl: "600px" }}
          className="imagePlato"
        ></Image>
      </Flex>
    </Box>
  )
}

export default DetailDrinks