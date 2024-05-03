import 'dotenv/config'
import jwt from 'jsonwebtoken'

const authJWT = async(req, res, next) => {
  try {
    const token = req.headers.authorization;
    if(!token) throw new Error('El token no existe')
    const validPayload = jwt.verify(token.split(' ')[1], process.env.SECRET_SIGN_JWT)
    if(validPayload.role === 'admin'){
      next()
    }

    throw new Error('Token invalido')
  } catch (error) {
    res.json({ res: false, message: error.message });
  }
}

export default authJWT