import React, { useState } from 'react';
import axios from 'axios';

const CodeGenerator = () => {
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleGenerateCode = async () => {
    setError('');
    setCode('');

    if (!language || !description) {
      setError('Please provide both a programming language and a description.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/code/generate', {
        language,
        description,
      });

      setCode(response.data.code);
    } catch (err) {
      setError('Failed to generate code. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Code Generator</h2>
      <div>
        <input
          type="text"
          placeholder="Programming Language (e.g., Python)"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <textarea
          placeholder="Describe the task the code should perform"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleGenerateCode}>Generate Code</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {code && (
        <div>
          <h3>Generated Code:</h3>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>{code}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeGenerator;