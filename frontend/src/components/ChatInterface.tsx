import React, { useState } from 'react';
import axios from 'axios';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ type: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { type: 'user', content: input }]);
    const userMessage = input;
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/nlp/process', {
        prompt: userMessage,
      });

      const botMessage = response.data.response;
      setMessages((prev) => [...prev, { type: 'bot', content: botMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [...prev, { type: 'bot', content: 'Error: Unable to process your request.' }]);
    }
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.type === 'user' ? 'right' : 'left' }}>
            <strong>{msg.type === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '80%' }}
      />
      <button onClick={handleSendMessage} style={{ width: '18%' }}>
        Send
      </button>
    </div>
  );
};

export default ChatInterface;