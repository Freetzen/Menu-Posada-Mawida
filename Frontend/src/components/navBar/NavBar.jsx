import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">
        <button>VOLVER AL MENÚ</button>
      </NavLink>
      <NavLink to="/lunchdinner">
        <button>ALMUERZO / CENA</button>
      </NavLink>
      <NavLink to="/tea">
        <button>MEDIA TARDE</button>
      </NavLink>
      <NavLink to="/barfridge">
        <button>FRIGOBAR</button>
      </NavLink>
    </div>
  );
}

export default NavBar;