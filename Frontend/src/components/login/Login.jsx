import  { useState } from 'react'
import userAdminProvider from '../../utils/userAdminProvider/userAdminProvider'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Box, Button, Flex, FormControl, FormLabel, Image, Input } from '@chakra-ui/react'
import mawidaLogo from "./../../../public/img/mawida.png";
import './Login.css'

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
    <Box className='bg' border={'1px'} w={'100%'} h={'950px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        
        <FormControl as={'form'} onSubmit={handleSubmit} borderRadius={'30px'} w={{base:'auto'}} h={{base:'auto'}} p={{base:'50px 50px', sm:'70px 80px', xl:'70px 80px'}}  m={'0px 20px'} bg={'#412A28'} display={'flex'} flexDirection={'column'}
         justifyContent={'center'} alignItems={'center'}  gap={5}>
            <Flex justifyContent={'center'}><Image src={mawidaLogo} w={'200px'}></Image></Flex>
            <Box w={{base:'auto', xl:'300px'}}>
              <FormLabel color={'grey'}>Email</FormLabel>
              <Input 
              borderColor={'grey'}
              bg={'white'}
              type="email" 
              name='email'
              value={loginUser.email}
              onChange={handleChange}
              />
            </Box>

            <Box w={{base:'auto', xl:'300px'}}>
              <FormLabel color={'grey'}>Contraseña</FormLabel>
              <Input 
              borderColor={'grey'}
              bg={'white'}
              type="password" 
              name='password'
              value={loginUser.password}
              onChange={handleChange}
              />
            </Box>
            <Button border={'none'} type='submit' m={'30px 0px'} w={'150px'}>Iniciar Sesión</Button>
        </FormControl>

    </Box>
  )
}

export default Login