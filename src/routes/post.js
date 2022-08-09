import { Router } from 'express';
import Post from '../controllers/Post';
import login from '../middlewares/login';

const router = new Router();

router.post('/create', login, Post.create);
router.get('/', Post.index);
router.get('/search', Post.show);
router.put('/update/:id', login, Post.update);
router.delete('/delete/:id', login, Post.delete);

export default router;
