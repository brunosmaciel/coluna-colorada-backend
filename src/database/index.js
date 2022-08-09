import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Post from '../models/Post';
import User from '../models/User';
import UserPicture from '../models/UserPicture';
import PostPicture from '../models/PostPicture';

const models = [Post, User, UserPicture, PostPicture];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
