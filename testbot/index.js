const token = "5466075119:AAFo-XLnwK4z9nmkwPdLOV_OKS6Qi2kKreg";

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Игорь локс!!!');
  });