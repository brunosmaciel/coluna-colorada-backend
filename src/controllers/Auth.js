import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async create(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      });
    }
    if (!(await user.isPasswordValid(password))) {
      return res.status(403).json({
        erros: ['access denied'],
      });
    }
    const { id } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      },
    );
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new AuthController();
