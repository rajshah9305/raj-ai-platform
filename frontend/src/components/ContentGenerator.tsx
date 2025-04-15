import React, { useState } from 'react';
import axios from 'axios';

const ContentGenerator = () => {
  const [contentType, setContentType] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleGenerateContent = async () => {
    if (!contentType || !topic) {
      setError('Please provide both content type and topic.');
      return;
    }

    setError('');
    setContent('');

    try {
      const response = await axios.post('http://localhost:5000/api/content/generate', {
        contentType,
        topic,
      });

      setContent(response.data.content);
    } catch (err) {
      setError('Failed to generate content. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Content Generator</h2>
      <div>
        <input
          type="text"
          placeholder="Content Type (e.g., article, email, summary)"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        />
        <textarea
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button onClick={handleGenerateContent}>Generate Content</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {content && (
          <div>
            <h3>Generated Content:</h3>
            <pre style={{ background: '#f4f4f4', padding: '10px' }}>{content}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;