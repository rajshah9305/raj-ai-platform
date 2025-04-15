import { Request, Response } from 'express';
import { getGPTResponse } from '../services/openRouterService';

export const processNLPRequest = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ message: 'Invalid input. A prompt is required.' });
    }

    const response = await getGPTResponse(prompt);

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};