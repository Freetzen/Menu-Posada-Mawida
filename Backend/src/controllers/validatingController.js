import 'dotenv/config'
import jwt from 'jsonwebtoken'

const validatingController = async(req, res) => {
    try {
        const token = req.cookies.token
        if(!token) {
            return res.json('El token no existe')
        }
        else{
            const validPayload = jwt.verify(token, process.env.SECRET_SIGN_JWT)
            res.status(200).json({auth: true})
        }
    
      } catch (error) {
        res.status(401).json({ res: false, message: "Invalid Token" }); //401 sin autorización
      }
}

export default validatingController