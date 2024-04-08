import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import userAdminProvider from "../../utils/userAdminProvider/userAdminProvider"

const urlLogin = import.meta.env.VITE_URL_LOGIN
const ProtectedRoute = () => {

    const navigate = useNavigate()

    const validatingUser = async () => {
        try {
            const {validateAdmin} = userAdminProvider
            const val = await validateAdmin()
            console.log('Soy protected ----> ',val)
            if(!val || val === 'El token no existe'){
                navigate(urlLogin)
            }
        } catch (error) {
            console.log('CATCH ------->',error.message)
        }
    }

    useEffect(() => {
        validatingUser()
    }, [])
    

  return (
    <Outlet/>
  )
}

export default ProtectedRoute