import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import userAdminProvider from "../../utils/userAdminProvider/userAdminProvider"

const urlLogin = import.meta.env.VITE_URL_LOGIN
const ProtectedRoute = () => {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const validatingUser = async () => {
        try {
            const val = await userAdminProvider.validateAdmin()
            setLoading(false)
            if(!val || val === 'El token no existe'){
                navigate(urlLogin)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        validatingUser()
    }, [])
    

  return (
    <>
    {
        !loading && <Outlet/>
    }
    </>
  )
}

export default ProtectedRoute