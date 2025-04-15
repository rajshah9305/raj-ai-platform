import { Router } from 'express';
import { generateCodeSnippet } from '../controllers/codeGenerationController';

const router = Router();

router.post('/generate', generateCodeSnippet);

export default router;