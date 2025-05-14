import aiTrigger from '../triggers/openai.js';
import { parseJson } from '../utils/parseMessage.js';
import bot, { Store } from '../config/telegram.js';
import * as messages from '../messages/openai.js';
import validTrigger from '../helpers/validTrigger.js';
import feedbackCollection from '../models/feedback.js';
import insuranceCollection from '../models/insurance.js';
import adminNotification from '../helpers/adminNotification.js';

function handleCreateAppointment(answer, chatId) {
  const obj = parseJson(answer);
  Store[chatId] = obj;

  const url = `${aiTrigger.APPOINMENT.slice(0)}?userId=${chatId}`;

  const message = messages.createAppointment(obj);

  bot.sendMessage(chatId, message, {
    reply_markup: {
      inline_keyboard: [[{ text: 'Відправити заявку', callback_data: url }]],
    },
  });
}

function handleSaveFeedback(answer, userId) {
  const obj = parseJson(answer);
  const message = messages.saveFeedback();
  feedbackCollection.create({ ...obj, userId });
  bot.sendMessage(userId, message);
}

function handleSaveClaim(answer, userId) {
  const obj = parseJson(answer);
  const message = messages.saveClaim();
  const adminMessage = messages.saveAdminClaim({ ...obj, userId });
  insuranceCollection.create({ ...obj, userId });
  bot.sendMessage(userId, message);
  adminNotification(adminMessage);
}

export async function checkAnswer(answer, chatId) {
  if (validTrigger(answer, aiTrigger.APPOINMENT)) {
    handleCreateAppointment(answer, chatId);
    return true;
  } else if (validTrigger(answer, aiTrigger.FEEDBACK)) {
    handleSaveFeedback(answer, chatId);
    return true;
  } else if (validTrigger(answer, aiTrigger.CLAIM)) {
    handleSaveClaim(answer, chatId);
    return true;
  }
  return false;
}
