import { Router } from 'express';
import { fetchWeatherData } from '../controllers/externalAPIController';

const router = Router();

router.get('/weather', fetchWeatherData);

export default router;