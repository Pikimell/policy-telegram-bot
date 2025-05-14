import trigger from '../triggers/openai.js';
import appointmentService from '../services/appointment.js';
import bot, { Store } from '../config/telegram.js';
import adminNotification from '../helpers/adminNotification.js';
import { adminAppointment } from '../messages/openai.js';

function deleteQueryMessage(query) {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  return bot.deleteMessage(chatId, messageId);
}

async function onCreateAppointment({ query, params }) {
  const data = new URLSearchParams(params);
  const userId = data.get('userId');
  const appointment = Store[userId];

  const obj = await appointmentService.createAppointment({
    ...appointment,
    userId,
  });

  const message = adminAppointment(obj);

  adminNotification(message);
  bot.sendMessage(
    userId,
    'Заявку успішно оформленно! Найближчим часом вам зателефонує менеджер!',
  );
}

async function onCallbackQuery(query) {
  const value = query.data;
  const data = value.split('?')[0];
  const params = value.split('?')[1];

  switch (data) {
    case trigger.APPOINMENT:
      onCreateAppointment({ query, params });
      deleteQueryMessage(query);
      break;
  }
}

bot.on('callback_query', onCallbackQuery);
