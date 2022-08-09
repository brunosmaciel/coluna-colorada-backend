import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res) => {
  res.json('ola');
});

export default router;
