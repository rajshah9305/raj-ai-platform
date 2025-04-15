import { Router } from 'express';
import { processNLPRequest } from '../controllers/nlpController';

const router = Router();

router.post('/process', processNLPRequest);

export default router;