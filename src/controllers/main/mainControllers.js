import { trigger } from '../../helpers/triggers.js';
import openaiService from '../../services/openai.js';
import { getChatId } from '../../utils/parseMessage.js';
import bot from '../../utils/telegram.js';
import { checkAnswer } from '../openai/index.js';

async function handleMessage(msg) {
  if (msg.text.startsWith('/')) return;
  const userId = getChatId(msg);
  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.askChatGPT(msg.text, userId);
  const isAiCommand = await checkAnswer(answer, userId);
  if (isAiCommand) return;
  bot.sendMessage(userId, answer, { parse_mode: 'HTML' });
}

async function handleStart(msg) {
  const userId = getChatId(msg);
  bot.sendChatAction(userId, 'typing');
  const answer = await openaiService.initChatGpt(userId);
  bot.sendMessage(userId, answer, { parse_mode: 'HTML' });
}

export function initMainControllers() {
  bot.on('message', handleMessage);
  bot.onText(trigger.user.START, handleStart);
}
