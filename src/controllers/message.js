import openaiService from '../services/openai.js';
import { getChatId } from '../utils/parseMessage.js';
import bot from '../config/telegram.js';
import { checkAnswer } from './gptController.js';

async function handleMessage(msg) {
  if (msg.text.startsWith('/')) return;
  const userId = getChatId(msg);
  const lang = msg.from.language_code;

  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.askChatGPT(msg.text, userId, { lang });

  console.log('=============================\n');
  console.log(answer);

  const isAiCommand = await checkAnswer(answer, userId);
  if (isAiCommand) return;
  bot.sendMessage(userId, answer, { parse_mode: 'HTML' });
}

bot.on('message', handleMessage);
