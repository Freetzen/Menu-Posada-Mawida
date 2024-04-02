import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const DessertsCard = ({ id, name, description, price, image }) => {
  return (

<Box
display={"flex"}
flexDirection={"column"}
justifyContent={'center'}
textAlign={"center"}
p={'20px 30px'}
w={{base: '70%', md:'400px', lg:'400px', xl:'400px'}}
h={'400px'}
key={id}
bg={'aliceblue'}
border={'1px'}
borderColor={'rgb(214, 214, 214)'}
borderRadius={'10px'}
boxShadow={'0px 6px 12px rgba(0, 0, 0, 0.2)'}
>
<NavLink to={`/dessertdetail/${id}`}>
  <Box w={'100%'} h={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
    <Box display={"flex"} justifyContent={"center"}>
      <Image src={image} w={"200px"}></Image>
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

export default DessertsCard;
