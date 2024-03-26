import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box w={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5} m={'50px 20px'}>
      <NavLink to="/">
        <Button fontWeight={"200"}>Volver al Menu</Button>
      </NavLink>
      <NavLink to="/lunchdinner">
        <Button fontWeight={"200"}>Almuerzo / Cena</Button>
      </NavLink>
      <NavLink to="/tea">
        <Button fontWeight={"200"}>Media Tarde</Button>
      </NavLink>
      <NavLink to="/barfridge">
        <Button fontWeight={"200"}>Frigobar</Button>
      </NavLink>
    </Box>
  );
}

export default NavBar;