import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [schedule, setSchedule] = useState('');
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    if (!name || !description || !schedule) {
      setError('All fields are required');
      return;
    }

    setError('');
    try {
      await axios.post('http://localhost:5000/api/tasks', {
        name,
        description,
        schedule,
        parameters: {},
      });
      setName('');
      setDescription('');
      setSchedule('');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Schedule (e.g., cron format)"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
        <button onClick={handleCreateTask}>Create Task</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div>
        <h3>Task List</h3>
        <ul>
          {tasks.map((task: any) => (
            <li key={task._id}>
              <strong>{task.name}</strong>: {task.description} <em>({task.schedule})</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;