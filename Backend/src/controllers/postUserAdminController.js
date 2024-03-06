import { createUser } from '../services/userServices.js'
import { createHash } from '../utils/bcrypt.js'

const postUserAdminController = async (req, res) => {
  try {
    const {email, password} = req.body
    if(email && password){
        const passwordEncripted = createHash(password)
        const userAdmin = await createUser({
            email,
            password: passwordEncripted
        })
        return res.status(200).json(userAdmin)
    }
  } catch (error) {
    
  }
}

export default postUserAdminController