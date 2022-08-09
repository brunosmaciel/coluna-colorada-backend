import { Router } from 'express';
import Auth from '../controllers/Auth';

const router = new Router();

router.post('/token', Auth.create);

export default router;
