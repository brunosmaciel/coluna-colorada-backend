import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
      biography: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 2555555],
            msg: 'Sua bio nao pode estar vazia',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, process.env.PASSWORD_HASH_SIZE);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.UserPicture, { foreignKey: 'user_id' });
  }

  isPasswordValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
