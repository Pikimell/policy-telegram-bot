import bot from '../config/telegram.js';
import { ADMINS } from '../utils/constants.js';

export default function adminNotification(message, options) {
  ADMINS.forEach((id) => {
    bot.sendMessage(id, message, options);
  });
}
