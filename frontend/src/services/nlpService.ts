import axios from 'axios';

const API_URL = 'http://localhost:5000/api/nlp';

export const processPrompt = async (prompt: string) => {
  const response = await axios.post(`${API_URL}/process`, { prompt });
  return response.data.response;
};