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
            id: userDB._id
          }
          const token = jwt.sign(payload, process.env.SECRET_SIGN_JWT, { maxAge: 1000 * 60 * 60 * 24 }) //24horas (1 segundo por 60 (1 minuto) por 60 (1 hora) por 24 (24 horas))
          res.cookie('token', token)
          return res.status(200).json({ login: true, data: payload });
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