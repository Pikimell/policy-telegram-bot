import { addToHistory, getHistory } from '../helpers/history.js';
import openai from '../utils/openai.js';
import { createPrompt } from '../utils/promptGenerator.js';

const openaiService = {
  async initChatGpt(userId, options = {}) {
    try {
      const response = await openai.chat.completions.create({
        model: options.model || 'gpt-4',
        user: `${userId}`,
        store: true,
        messages: [
          { role: 'system', content: createPrompt() },
          { role: 'user', content: 'Привіт. Що ти вмієш робити?' },
        ],
        max_tokens: options.maxTokens || 5000,
        temperature: options.temperature || 0.7,
      });

      const choice = response.choices?.[0]?.message?.content;
      if (!choice) {
        throw new Error('No response received from ChatGPT');
      }

      return choice.trim();
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
        { role: 'system', content: createPrompt() },
        ...getHistory(userId),
      ];

      const response = await openai.chat.completions.create({
        model: options.model || 'gpt-4',
        user: `${userId}`,
        store: true,
        messages,
        max_tokens: options.maxTokens || 3000,
        temperature: options.temperature || 0.5,
      });
      const answer = response.choices?.[0]?.message?.content.trim();
      addToHistory(userId, { role: 'assistant', content: 'answer' });
      return answer;
    } catch (error) {
      console.error(
        'Error in askChatGPT:',
        error.response?.data || error.message,
      );
      throw error;
    }
  },

  /**
   * Виконати запит до OpenAI Completion (старіша модель)
   * @param {String} prompt - Текст запиту
   * @param {Object} [options] - Додаткові параметри (наприклад, модель або макс. токени)
   * @returns {Promise<String>} - Відповідь OpenAI Completion
   */
  async askCompletion(prompt, options = {}) {
    try {
      const response = await openai.createCompletion({
        model: options.model || 'text-davinci-003', // Модель за замовчуванням
        prompt,
        max_tokens: options.maxTokens || 500,
        temperature: options.temperature || 0.7,
      });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error(
        'Error in askCompletion:',
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
