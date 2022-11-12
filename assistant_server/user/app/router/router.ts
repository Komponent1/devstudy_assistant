import express from 'express';

const router = express.Router();
router.use((req, res, next) => {
  next();
});
router.get('/test', (req, res) => res.json({ test: 'test' }));
/**
 * Write your router!
 * router.get('/api', apiFunction);
 */

export default router;
