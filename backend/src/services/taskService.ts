import Task from '../models/Task';

export const createTask = async (data: any) => {
  const task = new Task(data);
  return await task.save();
};

export const getTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

export const getTaskById = async (id: string) => {
  return await Task.findById(id);
};

export const updateTask = async (id: string, updates: any) => {
  return await Task.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteTask = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};