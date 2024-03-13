import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <h2>Main Menu</h2>
                <NavLink to='/lunchdinner'>
                    <button>ALMUERZO / CENA</button>
                </NavLink>
                <NavLink to='/barfridge'>
                    <button>FRIGOBAR</button>
                </NavLink>
                <NavLink to='/tea'>
                    <button>MEDIA TARDE</button>
                </NavLink>
                <div>
                    <div>
                        <h3>DESAYUNOS</h3>
                        <p>Desayuno continental $5500</p>
                    </div>
                    <div>
                        <h3>VINOS</h3>
                        <p>Para adquirir un vino, por favor consultar con recepcionista.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home