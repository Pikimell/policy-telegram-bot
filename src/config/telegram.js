import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_TOKEN } from './enviroment.js';

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

export const Store = {};
export default bot;
