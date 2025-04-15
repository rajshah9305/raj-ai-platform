import axios from 'axios';

const OPENROUTER_API_URL = 'https://api.openrouter.com/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  throw new Error('OpenRouter API key is not set in environment variables');
}

export const generateContent = async (contentType: string, topic: string): Promise<string> => {
  try {
    const prompt = `Generate a ${contentType} about the following topic: ${topic}`;
    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: 'gpt-4.1',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const message = response.data?.choices?.[0]?.message?.content;
    if (!message) {
      throw new Error('Invalid response from OpenRouter API');
    }

    return message;
  } catch (error) {
    console.error('Error communicating with OpenRouter API:', error.message);
    throw new Error('Failed to generate content from GPT API');
  }
};