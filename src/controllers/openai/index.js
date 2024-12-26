import { trigger } from '../../helpers/triggers.js';
import { parseJson } from '../../utils/parseMessage.js';
import bot from '../../utils/telegram.js';

const aiTrigger = trigger.openai;

function handleCreateClaim(answer, chatId) {
  const obj = parseJson(answer);
  const message = `Якщо все вірно, натисніть на кнопку відправити заявку
****************
Повне імя: ${obj.fullname};
Номер телефону: ${obj.phoneNumber};
Дата народження: ${obj.birthday};
Пошта: ${obj.email};
****************`;
  bot.sendMessage(chatId, message, {
    reply_markup: {
      inline_keyboard: [[{ text: 'Відправити заявку', callback_data: 'test' }]],
    },
  });
}

export async function checkAnswer(answer, chatId) {
  if (
    answer.startsWith(aiTrigger.newClaim) ||
    answer.includes(aiTrigger.newClaim.slice(1))
  ) {
    handleCreateClaim(answer, chatId);

    return true;
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  }
  return false;
}
