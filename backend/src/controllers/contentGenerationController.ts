import { Request, Response } from 'express';
import { generateContent } from '../services/contentGenerationService';

export const generateContentHandler = async (req: Request, res: Response) => {
  try {
    const { contentType, topic } = req.body;

    if (!contentType || !topic) {
      return res.status(400).json({ message: 'Content type and topic are required' });
    }

    const content = await generateContent(contentType, topic);

    return res.status(200).json({ content });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};