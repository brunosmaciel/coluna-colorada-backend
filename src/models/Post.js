import Sequelize, { Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo titulo deve ter no minimo 3 letras',
          },
        },
      },
      subtitle: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo subtitulo deve ter no minimo 3 letras',
          },
        },
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      postbody: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [20, 20000000000],
            msg: 'Coluna precisa ter um corpo de no minimo 20 caracteres',
          },
        },
      },
      createdby: {
        type: Sequelize.STRING,
        defaultValue: '',

      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.PostPicture, { foreignKey: 'post_id' });
  }
}
