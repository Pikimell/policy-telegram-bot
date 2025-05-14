import bot from '../config/telegram.js';
import openaiService from '../services/openai.js';
import user from '../triggers/user.js';
import { getChatId } from '../utils/parseMessage.js';

const handleStart = async (msg) => {
  const userId = getChatId(msg);
  const lang = msg.from.language_code;
  console.log(lang);

  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.initChatGpt(userId, { lang });
  bot.sendMessage(userId, answer, { parse_mode: 'HTML' });
};

bot.onText(user.START, handleStart);
