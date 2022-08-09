import express from 'express';
import dotenv from 'dotenv';
import './database';
import { resolve } from 'path';
import cors from 'cors';

dotenv.config();

import homeRoute from './routes/home';
import postRoute from './routes/post';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import picturesRoute from './routes/pictures';

const whiteList = [
  'https://coluna-colorada.vercel.app',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/posts', postRoute);
    this.app.use('/auth', authRoute);
    this.app.use('/user', userRoute);
    this.app.use('/image', picturesRoute);
  }
}

export default new App().app;
