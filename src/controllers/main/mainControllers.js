import { trigger } from '../../helpers/triggers.js';
import openaiService from '../../services/openai.js';
import { getChatId } from '../../utils/parseMessage.js';
import bot from '../../utils/telegram.js';

async function handleMessage(msg) {
  if (msg.text.startsWith('/')) return;
  const userId = getChatId(msg);
  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.askChatGPT(msg.text, userId);
  bot.sendMessage(userId, answer);
}

async function handleStart(msg) {
  const userId = getChatId(msg);
  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.initChatGpt(userId);
  bot.sendMessage(userId, answer);
}

export function initMainControllers() {
  bot.on('message', handleMessage);
  bot.onText(trigger.user.START, handleStart);
}
