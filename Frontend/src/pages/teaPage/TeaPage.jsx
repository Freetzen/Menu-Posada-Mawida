import { useEffect, useState } from "react";
import drinksProvider from "../../utils/drinksProvider/drinksProvider";
import DrinksCard from "../../components/drinksCard/DrinksCard";
import foodProvider from "../../utils/foodProvider/foodProvider";
import MealsCard from "../../components/mealsCard/MealsCard";
import NavBar from "../../components/navBar/NavBar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import mawidaLogo from "./../../../public/img/mawida.png";
import "./TeaPage.css";

const TeaPage = () => {
  const currentCategory = "media tarde";
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const bringMeals = async () => {
      const mealsBD = await foodProvider.getFood();
      const mealsTea = mealsBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      setMeals(mealsTea);
    };

    const bringDrinks = async () => {
      const drinksBD = await drinksProvider.getDrinks();
      const drinksTea = drinksBD.filter((item) =>
        item.category.includes(currentCategory)
      );
      setDrinks(drinksTea);
    };

    bringDrinks();
    bringMeals();
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
              Meals
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
            gap={15}
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
                image={item.image}
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

export default TeaPage;
