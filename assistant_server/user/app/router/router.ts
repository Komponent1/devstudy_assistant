import express from 'express';
import { redirect } from '../controller';

const router = express.Router();
router.use((req, res, next) => {
  next();
});
router.get('/test', (req, res) => res.json({ test: 'test' }));
router.get('/redirect', redirect);
/**
 * Write your router!
 * router.get('/api', apiFunction);
 */

export default router;
