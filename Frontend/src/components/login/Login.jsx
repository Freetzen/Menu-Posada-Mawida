import React, { useState } from 'react'
import userAdminProvider from '../../utils/userAdminProvider/userAdminProvider'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const data = await userAdminProvider.getUserAdmin(loginUser);
        if (data?.login) {
          return navigate("/backofficepmadmin");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${data?.message}`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.log(error);
      }

      setLoginUser({
        email: "",
        password: "",
      });
    };

  return (
    <div>
        
        <form onSubmit={handleSubmit}>

            <label>Correo</label>
            <input 
            type="email" 
            name='email'
            value={loginUser.email}
            onChange={handleChange}
            />


            <label>Contraseña</label>
            <input 
            type="password" 
            name='password'
            value={loginUser.password}
            onChange={handleChange}
            />

            <button type='submit'>Iniciar Sesión</button>

        </form>

    </div>
  )
}

export default Login