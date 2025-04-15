import { Request, Response } from 'express';
import { generateCode } from '../services/codeGenerationService';

export const generateCodeSnippet = async (req: Request, res: Response) => {
  try {
    const { language, description } = req.body;

    if (!language || !description) {
      return res.status(400).json({ message: 'Language and description are required' });
    }

    const code = await generateCode(language, description);

    return res.status(200).json({ code });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};