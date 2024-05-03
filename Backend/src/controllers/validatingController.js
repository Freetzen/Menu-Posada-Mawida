import 'dotenv/config'
import jwt from 'jsonwebtoken'

const validatingController = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json("El token no existe");
    }
    const validPayload = jwt.verify(token.split(' ')[1], process.env.SECRET_SIGN_JWT)
    if(validPayload.role === 'admin'){
      return res.status(200).json({ auth: true });
    }
    res.status(200).json({ auth: false });
  } catch (error) {
    res.status(401).json({ auth: false, message: "Token invalido" })
  }
};

export default validatingController