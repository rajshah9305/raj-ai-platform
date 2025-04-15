import React, { useState } from 'react';
import axios from 'axios';

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city');
      return;
    }

    setError('');
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/external/weather`, {
        params: { city },
      });

      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Weather Data</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Fetch Weather</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherData;