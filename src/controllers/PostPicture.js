/* eslint-disable camelcase */
import multer from 'multer';
import PostPicture from '../models/PostPicture';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('postpicture');

class UserPictureController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json(err.code);
      }
      try {
        const { originalname, filename } = req.file;
        const { post_id } = req.body;
        console.log(post_id);
        const postPic = await PostPicture.create({
          originalname,
          filename,
          post_id,
        });
        return res.status(200).json(postPic);
      } catch (e) {
        return res.status(400).json({
        });
      }
    });
  }
}

export default new UserPictureController();
