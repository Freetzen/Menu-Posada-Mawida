import { useEffect, useState } from "react";
import foodProvider from "../../utils/foodProvider/foodProvider";
import drinksProvider from "../../utils/drinksProvider/drinksProvider";
import MealsCard from "../../components/mealsCard/MealsCard";
import DrinksCard from "../../components/drinksCard/DrinksCard";
import NavBar from "../../components/navBar/NavBar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dessertsProvider from "../../utils/dessertsProvider/dessertsProvider";
import DessertsCard from "../../components/dessertsCard/DessertsCard";
import mawidaLogo from "./../../../public/img/mawida.png";
import "./LunchDinner.css";

const LunchDinner = () => {
  const currentCategory = "almuerzo";
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const bringMeals = async () => {
      const mealsBD = await foodProvider.getFood();
      const mealsTea = mealsBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      const filterActive = mealsTea.filter((item) =>
        item.stock
      )
      setMeals(filterActive);
    };

    const bringDesserts = async () => {
      const dessertsBD = await dessertsProvider.getDesserts();
      const dessertsTea = dessertsBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      const filterActive = dessertsTea.filter((item) =>
        item.stock
      )
      setDesserts(filterActive);
    };

    const bringDrinks = async () => {
      const drinksBD = await drinksProvider.getDrinks();
      const drinksTea = drinksBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      const filterActive = drinksTea.filter((item) =>
        item.stock
      )
      setDrinks(filterActive);
    };

    bringDrinks();
    bringMeals();
    bringDesserts();
  }, []);

  return (
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
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
        <NavBar />
      </Box>
      <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        alignContent={"center"}
        w={'100%'}
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
            Almuerzo | Cena
          </Text>
          {meals.map((item) => (
            <MealsCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              accompaniment={item.accompaniment}
            />
          ))}
        </Box>
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
            as={"h2"}
            fontSize={"2xl"}
            fontWeight={1000}
            letterSpacing={"1px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"aliceblue"}
            bg={"#412A28"}
          >
            Postres
          </Text>
          {desserts.map((item) => (
            <DessertsCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Box>
        <Box
          w={"100%"}
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
            mb={"30px"}
          >
            Bebidas
          </Text>
          {drinks.map((item) => (
            <DrinksCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Box>
      </Flex>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100%'} bg={'#412A28'}>
        <NavBar />
      </Box>
    </Flex>
  );
};

export default LunchDinner;
