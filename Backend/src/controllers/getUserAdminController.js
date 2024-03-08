import { findUserByEmail } from "../services/userServices.js";
import { validatePassword } from "../utils/bcrypt.js";

const getUserAdminController = async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(req.query);

    if (email && password) {
      const userDB = await findUserByEmail(email);

      if (userDB?.email) {
        const passwordValidate = validatePassword(password, userDB.password);

        if (passwordValidate) {
          return res.status(200).json({ login: true });
        } else {
          return res.status(200).json({ login: false, message: "Credenciales incorrectas." });
        }
      }
      return res.status(200).json({ login: false, message: "Usuario no encontrado." });
    }

    return res
      .status(200)
      .json({ login: false, message: "Faltan credenciales." });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default getUserAdminController;
