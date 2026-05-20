import { Groq } from 'groq-sdk';

export function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error('The GROQ_API_KEY environment variable is missing or empty.');
  }

  return new Groq({ apiKey });
}
