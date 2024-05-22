import { useEffect, useState } from "react";
import foodProvider from "../../utils/foodProvider/foodProvider";
import { NavLink, useParams } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "./Detail.css";

const DetailFood = () => {
  const [info, setInfo] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getdetail = async () => {
      try {
        const data = await foodProvider.getFoodById(id);
        if (data) {
          return setInfo(data);
        } else {
          alert("No se encontro el producto");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getdetail();
  }, []);


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
        // alignItems={'center'}
        w={{ base: "100%", xl: "50%" }}
        h={{ base: "100%", xl: "100vh" }}
        gap={{ base: 1, xl: 3 }}
        px={{ base: "0px", xl: "100px" }}
        py={{ base: "50px", xl: "150px" }}
      >
        <Flex
          flexDirection={"column"}
          textAlign={{ base: "center", xl: "start" }}
        >
          <Text color={"red"} fontSize={{ base: "lg", xl: "xl" }}>
            Posada Mawida
          </Text>
          <Text
            className="customText1"
            fontSize={{ base: "4xl", xl: "6xl" }}
            fontWeight={800}
            letterSpacing={"-3px"}
          >
            {info.name}
          </Text>
          <Text
            className="customText2"
            fontSize={{ base: "2xl", xl: "4xl" }}
            fontWeight={300}
            letterSpacing={"-1px"}
          >
            {info.accompaniment}
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={{ base: "center", xl: "start" }}
          textAlign={{ base: "center", xl: "start" }}
        >
          <Text
            fontSize={{ base: "md", xl: "lg" }}
            color={"#747373"}
            fontWeight={300}
            w={"90%"}
            className="text"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corporis natus quis fugiat repudiandae quo illum delectus aspernatur
            aut saepe consequuntur dolorum exercitationem.
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
            letterSpacing={'-3px'}
          >
           $ {info.price}
          </Text>
        </Flex>
        <Flex mt={"10px"} justifyContent={{ base: "center", xl: "start" }}>
        <NavLink to="/lunchdinner">
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
          w={{ base: "200px", md: "500px", lg: "400px", xl: "650px" }}
          className="imagePlato"
        ></Image>
      </Flex>
    </Box>
  );
};

export default DetailFood;
