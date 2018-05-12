const Discord = require('discord.js');
const token = "Hell Nah";
const bot = new Discord.Client();
var prefix = '!';

const antiswear = require("./modules/antiswear.js");

bot.on("ready", function() {
      bot.user.setGame("FilterBot Prefix = !" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});

case "antiswear":
message.reply("{PREFIX}chatfilter ON/OFF");
break;


bot.login(process.env.BOT_TOKEN);
