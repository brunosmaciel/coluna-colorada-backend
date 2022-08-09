import { Router } from 'express';
import UserPicture from '../controllers/UserPicture';
import PostPicture from '../controllers/PostPicture';

const router = new Router();

router.post('/user', UserPicture.create);
router.post('/post', PostPicture.create);

export default router;
