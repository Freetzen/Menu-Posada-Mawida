import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import foodProvider from "../../utils/foodProvider/foodProvider";
import { GiWineBottle } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import "./Home.css";

const Home = () => {
  const [breakfast, setBreakfast] = useState("");

  useEffect(() => {
    const getPrice = async () => {
      try {
        const priceBreakfast = await foodProvider.getFood();
        const filterBreakfast = priceBreakfast.filter((e) =>
          e.category.includes("breakfast")
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
          h={"600px"}
          pb={"50px"}
        >
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
              <Button fontWeight={"200"}>Almuerzo | Cena</Button>
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
          border={"1px"}
          bg={"#232323"}
        >
          <Flex
            direction={"column"}
            pb={"100px"}
            m={"0px 10px"}
            alignItems={"center"}
          >
            <MdFreeBreakfast color={"aliceblue"} fontSize={"20px"} />
            <Text
              as={"h3"}
              fontSize={"2xl"}
              textAlign={"center"}
              fontWeight={"400"}
              color={"aliceblue"}
              pb={"10px"}
            >
              Desayuno
            </Text>
            <Text
              as={"p"}
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"200"}
              color={"rgb(139, 139, 139)"}
            >
              Desayuno continental ${breakfast.price}
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            pb={"150px"}
            m={"0px 10px"}
            alignItems={"center"}
          >
            <GiWineBottle color={"aliceblue"} fontSize={"25px"} />
            <Text
              as={"h3"}
              fontSize={"2xl"}
              textAlign={"center"}
              fontWeight={"400"}
              color={"aliceblue"}
              pb={"10px"}
            >
              Vinos
            </Text>
            <Text
              as={"p"}
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"200"}
              color={"rgb(139, 139, 139)"}
            >
              Para adquirir un vino, por favor consultar con recepción.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
