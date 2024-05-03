import 'dotenv/config'
import { findUserByEmail } from "../services/userServices.js";
import { validatePassword } from "../utils/bcrypt.js";
import jwt from 'jsonwebtoken'

const getUserAdminController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userDB = await findUserByEmail(email);

      if (userDB?.email) {
        const passwordValidate = validatePassword(password, userDB.password);

        if (passwordValidate) {
          const payload= {
            email: userDB.email,
            role: userDB.role,
            id: userDB._id
          }
          const token = jwt.sign(payload, process.env.SECRET_SIGN_JWT)
          return res.status(200).json({ login: true, data: payload, token });
        } else {
          return res.status(200).json({ login: false, message: "Credenciales incorrectas." });
        }
      }
      return res.status(200).json({ login: false, message: "Usuario no encontrado." });
    }

    return res.status(200).json({ login: false, message: "Faltan credenciales." });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default getUserAdminController;