import React, { useState } from 'react';
import axios from 'axios';

const JokeGenerator = () => {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
      setJoke(null);
    }
  };

  return (
    <div>
      <h2>Random Joke Generator</h2>
      <button onClick={fetchJoke}>Get a Random Joke</button>
      {joke && (
        <div>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>
      )}
      {!joke && <p>Click the button to see a random joke!</p>}
    </div>
  );
};

export default JokeGenerator;