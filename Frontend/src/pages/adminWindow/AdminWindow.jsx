import React, { useEffect, useState } from "react";
import SearchBarAdmin from "../../components/adminUtils/SearchBarAdmin/SearchBarAdmin";
import DetailAdmin from "../../components/adminUtils/detailAdmin/DetailAdmin";
import drinksProvider from "../../utils/drinksProvider/drinksProvider";
import foodProvider from "../../utils/foodProvider/foodProvider";
import dessertsProvider from "../../utils/dessertsProvider/dessertsProvider";
// import CreateFood from "../../components/adminUtils/createFood/CreateFood";
import ButtonCreate from "../../components/adminUtils/buttonCreate/ButtonCreate";

import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

const AdminWindow = () => {
  const [categoryToEdit, setCategoryToEdit] = useState("All");
  const [itemstoEdit, setItemstoEdit] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [detailState, setDetailState] = useState({});


  const bringAllData = async () => {
    const drinks = await drinksProvider.getDrinks();
    const meals = await foodProvider.getFood();
    const desserts = await dessertsProvider.getDesserts();
    setItemstoEdit(drinks.concat(meals, desserts));
    setAllProducts(drinks.concat(meals, desserts));
  };
  useEffect(() => {
    bringAllData();
  }, []);

  const showAdditionalColumns = useBreakpointValue({ base: false, xs: false,  sm: false, md:true, lg:true, xl:true, full:true });

  return (
    <Box>
      <SearchBarAdmin
        allProducts={allProducts}
        setCategoryToEdit={setCategoryToEdit}
        setItemstoEdit={setItemstoEdit}
        setDetailState={setDetailState}
        itemstoEdit={itemstoEdit}
      />
      <Box>
        {detailState.name ? (
          <DetailAdmin
            detailState={detailState}
            categoryToEdit={categoryToEdit}
            setDetailState={setDetailState}
            setItemstoEdit={setItemstoEdit}
          />
        ) : detailState === "create" ? (
          <ButtonCreate />
        ) : (
          <TableContainer>
            <Table variant="unstyled" size={{ base: 'sm', xs: 'sm',  sm: 'sm', md:'sm', lg:'md', xl:'md', full:'md' }} >
              <Thead>
                <Tr bg="#a98467" color="white" h="60px">
                  <Th color="white" fontSize="md">
                    Nombre
                  </Th>
                  {showAdditionalColumns && (
                    <>
                      <Th color="white" fontSize="md">
                        Estado
                      </Th>
                      <Th color="white" fontSize="md">
                        Categoria
                      </Th>
                      <Th textAlign="center" color="white" fontSize="md">
                        Precio
                      </Th>
                    </>
                  )}
                  <Th textAlign="end" color="white" fontSize="md">
                    Editar
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {itemstoEdit.map((item) => (
                  <Tr key={item._id} bg="aliceblue" borderBottom="1px" borderColor="rgb(208, 208, 208)">
                    <Td fontWeight="200">{item.name}</Td>
                    {showAdditionalColumns && (
                      <>
                        <Td fontWeight="200">{item.stock ? "Activo" : "Inactivo"}</Td>
                        <Td fontWeight="200">{item.category.join(", ")}</Td>
                        <Td textAlign="center" fontWeight="200">
                          ${item.price}
                        </Td>
                      </>
                    )}
                    <Td pr="15px" textAlign="end">
                      <Button _hover="none" bg="#412a28" color="white" fontWeight="200" onClick={() => setDetailState(item)}>
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};
export default AdminWindow;



{/* {itemstoEdit.map((item) => (
<AdminCard
  key={item._id}
  id={item._id}
  name={item.name}
  price={item.price}
  stock={item.stock}
  productype={item.productype}
  category={item.category}
  accompaniment={item.accompaniment ? item.accompaniment : ""}
  description={item.description ? item.description : ""}
  setDetailState={setDetailState}
/>))} */}