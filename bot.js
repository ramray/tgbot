const { Telegraf } = require('telegraf');
const bot = new Telegraf('6221661261:AAGBcdm7Xotx04IijZ4L8Hc4fj5OvNnLZH8');
const chatId = 423178720;


const { exec,spawn, execFile } = require('node:child_process');

bot.command('regress', (ctx) => {
execFile('C:\\Users\\User\\tg_bot\\123.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  bot.telegram.sendMessage(chatId, 'Command succesful');
    } 
  )}
);

bot.launch();