import { encoding_for_model } from 'tiktoken';
import { createPrompt } from './promptGenerator.js';

const calculateTokens = (prompt, model = 'gpt-4') => {
  try {
    // Ініціалізуємо кодування для обраної моделі
    const encoding = encoding_for_model(model);

    // Розраховуємо кількість токенів
    const tokens = encoding.encode(createPrompt(prompt));

    // Звільняємо ресурси
    encoding.free();

    return tokens.length; // Повертає кількість токенів
  } catch (error) {
    console.error('Error calculating tokens:', error);
    return null;
  }
};

const tokenCount = calculateTokens('Хочу Їсти');
console.log('Кількість токенів:', tokenCount);
