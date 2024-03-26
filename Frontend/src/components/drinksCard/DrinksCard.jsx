import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import jugoNaranja from "./../../../public/img/jugo.png";

const DrinksCard = ({ id, name, description, price }) => {
  return (
    <Box
    display={"flex"}
flexDirection={"column"}
justifyContent={'center'}
textAlign={"center"}
w={{base: '70%', md:'350px', lg:'350px', xl:'350px'}}
h={'400px'}
key={id}
bg={'aliceblue'}
border={'1px'}
borderColor={'rgb(214, 214, 214)'}
borderRadius={'10px'}
boxShadow={'0px 6px 12px rgba(0, 0, 0, 0.2)'}
    >
      <NavLink to={`/drinkdetail/${id}`}>
      <Box
        w={"100%"}
        h={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={jugoNaranja} w={"100px"}></Image>
        </Box>
        <Text as={"h3"} fontSize={"2xl"} fontWeight={1000} color={'#543e3c'}>
          {name}
        </Text>
        <Text color={'black'} as={"p"} fontSize={"17px"}>{description}</Text>
        <Text color={'black'} as={"p"} fontSize={"17px"} fontWeight={500}>$ {price}</Text>
      </Box>
      </NavLink>
    </Box>
  );
};

export default DrinksCard;
