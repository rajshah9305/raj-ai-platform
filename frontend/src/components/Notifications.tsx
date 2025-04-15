import React, { useEffect, useState } from 'react';
import socket from '../services/socketService';

const Notifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Listen for notifications
    socket.on('notification', (data: string) => {
      setNotifications((prev) => [...prev, data]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;