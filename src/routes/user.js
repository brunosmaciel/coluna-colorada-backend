import { Router } from 'express';
import User from '../controllers/User';
import login from '../middlewares/login';

const router = new Router();

router.get('/', login, User.show);
router.post('/create', User.create);
router.post('/update/:id', login, User.update);
router.post('/delete/:id', login, User.delete);

export default router;
