import { Request, Response } from 'express';
import { getWeatherData } from '../services/externalAPIService';

export const fetchWeatherData = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;

    if (!city || typeof city !== 'string') {
      return res.status(400).json({ message: 'City is required and should be a string' });
    }

    const weatherData = await getWeatherData(city);

    return res.status(200).json(weatherData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};