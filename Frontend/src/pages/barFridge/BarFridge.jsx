import { useEffect, useState } from "react";
import drinksProvider from "../../utils/drinksProvider/drinksProvider";
import DrinksCard from "../../components/drinksCard/DrinksCard";
import NavBar from "../../components/navBar/NavBar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import mawidaLogo from "./../../../public/img/mawida.png";
import "./BarFridge.css";

const BarFridge = () => {
  const currentCategory = "frigobar";
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const bringDrinks = async () => {
      const drinksBD = await drinksProvider.getDrinks();
      const drinksTea = drinksBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      setDrinks(drinksTea);
    };
    bringDrinks();
  }, []);
  return (
    <>
      <Flex
        id="bgImage"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"auto"}
        pt={"100px"}
        bg={"#412A28"}
      >
        <Box>
          <Image src={mawidaLogo} w={"500px"}></Image>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
        >
          <NavBar />
        </Box>
        <Flex
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignContent={"center"}
          w={"100%"}
          h={"auto"}
          bg={"whitesmoke"}
        >
          <Box
            w={"100%"}
            h={"auto"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={10}
            pb={"50px"}
          >
            <Text
              w={"100%"}
              h={"70px"}
              has={"h2"}
              fontSize={"2xl"}
              fontWeight={1000}
              letterSpacing={"1px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"aliceblue"}
              bg={"#412A28"}
            >
              Drinks
            </Text>
            {drinks.map((item) => (
              <DrinksCard
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            ))}
          </Box>
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          h={"100%"}
          bg={"#412A28"}
        >
          <NavBar />
        </Box>
      </Flex>
    </>
  );
};

export default BarFridge;
