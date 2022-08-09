import { Model, DataTypes } from 'sequelize';

export default class PostPicture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            nome: 'campo nao pode ficar vazio',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            nome: 'campo nao pode ficar vazio',
          },
        },
      },
      url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `https://coluna-colorada.herokuapp.com/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
      tableName: 'postpicture',
    });
  }
}
