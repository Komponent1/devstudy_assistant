import express from 'express';

const router = express.Router();
router.use((req, res, next) => {
  next();
});
/**
 * Write your router!
 * router.get('/api', apiFunction);
 */

export default router;
