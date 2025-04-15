import express from 'express';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;