const token = "5466075119:AAFo-XLnwK4z9nmkwPdLOV_OKS6Qi2kKreg";
const fs = require('fs')

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(token, {polling: true});

bot.on('message', async msg => {

    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === "/токен") {
    const fileContent = fs.readFileSync("wowtoken.txt", "utf8")
    await bot.sendMessage(chatId, fileContent);
    }
  });