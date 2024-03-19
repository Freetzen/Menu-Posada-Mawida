import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import TremendoBife from "./../../../public/img/pngegg.png";

const MealsCard = ({key, id, name, price, accompaniment}) => {
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={'center'}
    textAlign={"center"}
    p={'20px 30px'}
    w={'400px'}
    h={'400px'}
    key={key}
    bg={'aliceblue'}
    border={'1px'}
    borderColor={'rgb(214, 214, 214)'}
    borderRadius={'10px'}
    boxShadow={'0px 6px 12px rgba(0, 0, 0, 0.2)'}
    >
      <NavLink to={`/mealdetail/${id}`}>
        <Box w={'100%'} h={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
          <Box display={"flex"} justifyContent={"center"}>
            <Image src={TremendoBife} w={"200px"}></Image>
          </Box>
          <Text as={"h3"} fontSize={"2xl"} fontWeight={1000} color={'#543e3c'}>
            {name}
          </Text>
          <Text color={'black'} as={"p"} fontSize={"17px"}>{accompaniment ? accompaniment : ""}</Text>
          <Text color={'black'} as={"p"} fontSize={"17px"} fontWeight={500}>$ {price}</Text>
        </Box>
      </NavLink>
    </Box>



  );
};

export default MealsCard;
