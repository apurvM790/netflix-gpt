import OpenAI from 'openai';
import { GPT_KEY } from './constants';

const client = new OpenAI({
  apiKey: process.env[GPT_KEY], 
});

export default client;