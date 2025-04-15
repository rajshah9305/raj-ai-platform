import React from 'react';
import ChatInterface from './ChatInterface';
import CodeGenerator from './CodeGenerator';
import TaskManager from './TaskManager';
import ContentGenerator from './ContentGenerator';
import WeatherData from './WeatherData';
import Notifications from './Notifications';

function App() {
  return (
    <div>
      <h1>Welcome to the RAJ AI Platform</h1>
      <ChatInterface />
      <CodeGenerator />
      <TaskManager />
      <ContentGenerator />
      <WeatherData />
      <Notifications />
    </div>
  );
}

export default App;