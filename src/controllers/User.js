import User from '../models/User';
import UserPicture from '../models/UserPicture';

class UserController {
  async show(req, res) {
    try {
      const user = await User.findByPk(1, {
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [UserPicture, 'id', 'DESC']],
        include: {
          model: UserPicture,
          attributes: ['filename', 'id', 'url'],
        },

      });

      res.status(200).json(user);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;

      res.status(200).json({
        id,
        nome,
        email,
      });
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json('missing id');
      }

      const user = await User.findByPk(id);

      if (!user) {
        res.status(400).json('user not found');
      }

      const updatedUser = await user.update(req.body);

      res.status(200).json(`O usuario ${updatedUser.nome} foi atualizado com sucesso`);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json('missing id');
      }

      const user = await User.findByPk(id);

      if (!user) {
        res.status(400).json('user not found');
      }

      const userDestroyed = await user.destroy();

      res.status(200).json(`O usuario ${userDestroyed.nome} foi apagado com sucesso`);
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new UserController();
