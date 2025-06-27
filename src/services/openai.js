import openai from '../config/openai.js';
import { DEFAULT_GPT_MODEL } from '../utils/constants.js';
import { parseAnswer } from '../utils/parseMessage.js';
import { createPrompt } from '../utils/promptGenerator.js';
import { addToHistory, clearHistory, getHistory } from '../utils/history.js';

const openaiService = {
  async initChatGpt(userId, options = {}) {
    try {
      clearHistory(userId);
      const response = await openai.chat.completions.create({
        model: options.model || DEFAULT_GPT_MODEL,
        user: `${userId}`,
        store: true,
        messages: [
          { role: 'system', content: createPrompt(options.lang) },
          {
            role: 'user',
            content:
              'Hello, who are you, what is your name and what can you do?',
          },
        ],
        max_tokens: options.maxTokens || 5000,
        temperature: options.temperature || 0.7,
      });

      const choice = response.choices?.[0]?.message?.content.trim();
      if (!choice) {
        throw new Error('No response received from ChatGPT');
      }

      return parseAnswer(choice);
    } catch (error) {
      console.error(
        'Error in askChatGPT:',
        error.response?.data || error.message,
      );
      throw error;
    }
  },

  /**
   * Виконати запит до ChatGPT
   * @param {String} prompt - Текст запиту
   * @param {Object} [options] - Додаткові параметри (наприклад, модель або макс. токени)
   * @returns {Promise<String>} - Відповідь ChatGPT
   */

  async askChatGPT(prompt, userId, options = {}) {
    try {
      addToHistory(userId, { role: 'user', content: prompt });
      const messages = [
        { role: 'system', content: createPrompt(options.lang) },
        ...getHistory(userId),
      ];

      const response = await openai.chat.completions.create({
        model: options.model || DEFAULT_GPT_MODEL,
        user: `${userId}`,
        store: true,
        messages,
        max_tokens: options.maxTokens || 3000,
        temperature: options.temperature || 0.5,
      });

      let answer = response.choices?.[0]?.message?.content.trim();
      addToHistory(userId, { role: 'assistant', content: parseAnswer(answer) });
      return parseAnswer(answer);
    } catch (error) {
      console.error(
        'Error in askChatGPT:',
        error.response?.data || error.message,
      );
      throw error;
    }
  },

  /**
   * Отримати список доступних моделей
   * @returns {Promise<Array>} - Масив моделей
   */
  async listModels() {
    try {
      const response = await openai.listModels();
      return response.data.data.map((model) => model.id);
    } catch (error) {
      console.error(
        'Error in listModels:',
        error.response?.data || error.message,
      );
      throw error;
    }
  },
};

export default openaiService;
