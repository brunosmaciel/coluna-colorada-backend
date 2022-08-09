/* eslint-disable camelcase */
import multer from 'multer';
import UserPicture from '../models/UserPicture';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('userpicture');

class UserPictureController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json(err.code);
      }
      try {
        const { originalname, filename } = req.file;
        const { user_id } = req.body;

        const userPic = await UserPicture.create({
          originalname,
          filename,
          user_id,
        });
        return res.status(200).json(userPic);
      } catch (error) {
        return res.status(400).json({
          errors: ['erro'],
        });
      }
    });
  }
}

export default new UserPictureController();
