import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import foodProvider from "../../utils/foodProvider/foodProvider";
import { GiWineBottle } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import mawidaLogo from './../../../public/img/mawida.png'
import "./Home.css";

const Home = () => {
  const [breakfast, setBreakfast] = useState("");

  useEffect(() => {
    const getPrice = async () => {
      try {
        const priceBreakfast = await foodProvider.getFood();
        const filterBreakfast = priceBreakfast.filter((e) =>
          e.category.includes("desayuno")
        );
        setBreakfast(filterBreakfast[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getPrice();
  }, []);
  return (
    <>
      <Flex
        w={"100%"}
        h={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Flex
          className="home"
          flexDirection={"column"}
          justifyContent={"end"}
          gap={10}
          w={"100%"}
          h={"700px"}
          pb={"50px"}
        >
          <Flex justifyContent={'center'} alignContent={'center'}>
            <Image src={mawidaLogo} w={{base:'350px',xl:'500px'}}></Image>
          </Flex>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              as={"h2"}
              fontSize={"2xl"}
              fontWeight={"400"}
              letterSpacing={"-1px"}
              color={'aliceblue'}
            >
              Main Menu
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            m={"0px 10px"}
          >
            <NavLink to="/lunchdinner">
              <Button fontWeight={"200"} >Almuerzo | Cena</Button>
            </NavLink>
            <NavLink to="/barfridge">
              <Button fontWeight={"200"}>Frigobar</Button>
            </NavLink>
            <NavLink to="/tea">
              <Button fontWeight={"200"}>Media Tarde</Button>
            </NavLink>
          </Box>
        </Flex>

        <Flex
          w={"100%"}
          h={"auto"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          pt={"100px"}
          gap={20}
          bg={"#412A28"}
        >
          <Flex
            direction={"column"}
            pb={"100px"}
            m={"0px 10px"}
            alignItems={"center"}
          >
            <MdFreeBreakfast color={"#ede0d4"} fontSize={"25px"} />
            <Text
              as={"h3"}
              fontSize={"4xl"}
              textAlign={"center"}
              fontWeight={"500"}
              color={"#ede0d4"}
              pb={"10px"}
            >
              Desayuno
            </Text>
            <Text
              as={"p"}
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"200"}
              color={"#ede0d4"}
            >
              Desayuno continental <br/> ${breakfast?.price}
            </Text>
          </Flex>


          <Flex
            direction={"column"}
            pb={"150px"}
            m={"0px 10px"}
            alignItems={"center"}
          >
            <GiWineBottle color={"#ede0d4"} fontSize={"25px"} />
            <Text
              as={"h3"}
              fontSize={"4xl"}
              textAlign={"center"}
              fontWeight={"500"}
              color={"#ede0d4"}
              pb={"10px"}
            >
              Vinos
            </Text>
            <Text
              as={"p"}
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"300"}
              color={"#ede0d4"}
            >
              Para adquirir un vino, por favor <br/> consultar con recepción.
            </Text>
          </Flex>
          
        </Flex>
      </Flex>
    </>
  );
};

export default Home;