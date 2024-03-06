import { findUserByEmail } from "../services/userServices.js"
import { validatePassword } from "../utils/bcrypt.js"

const getUserAdminController = async (req, res) => {
  try {
    const {email, password} = req.body

    if(email && password){
        const userDB = await findUserByEmail(email)
        const passwordValidate = validatePassword(password, userDB.password)
        if(passwordValidate === true){
            return res.status(200).json({login: true})
        }else{
            return res.status(301).json({login: false, message: 'Credenciales incorrectas.'})
        }

    }
    return res.status(404).json({login: false, message: 'Faltan credenciales.'})
  } catch (error) {
    
  }
}

export default getUserAdminController