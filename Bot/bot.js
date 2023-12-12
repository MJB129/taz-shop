const { Telegraf} = require("telegraf");
const TOKEN = "6522479560:AAHNI-kwFzqQf1MJsgTu_driW-pQY3SkQZQ"
const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply('Welcome to Taz Shop, {'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()