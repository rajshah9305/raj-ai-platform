import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
  name: string;
  description: string;
  schedule: string; // Cron format or "immediate"
  parameters: Record<string, any>;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  result?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  schedule: { type: String, required: true },
  parameters: { type: Schema.Types.Mixed, required: true },
  status: { type: String, default: 'pending' },
  result: { type: String },
}, { timestamps: true });

export default mongoose.model<ITask>('Task', TaskSchema);