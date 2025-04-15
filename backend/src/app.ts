import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import nlpRoutes from './routes/nlpRoutes';
import codeGenerationRoutes from './routes/codeGenerationRoutes';
import taskRoutes from './routes/taskRoutes';
import contentGenerationRoutes from './routes/contentGenerationRoutes';
import externalAPIRoutes from './routes/externalAPIRoutes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/raj-ai';
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/nlp', nlpRoutes);
app.use('/api/code', codeGenerationRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/content', contentGenerationRoutes);
app.use('/api/external', externalAPIRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

export default app;