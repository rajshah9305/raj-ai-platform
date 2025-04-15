import { Router } from 'express';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.status(200).send({ message: 'API is running' });
});

export default router;