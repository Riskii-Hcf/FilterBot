const Discord = require('discord.js');
const token = "Hell Nah";
const bot = new Discord.Client();
var prefix = '!';
const swears = require('./swears.js'); 

bot.on("ready", function() {
      bot.user.setGame("FilterBot Prefix = !" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});

case "antiswear":
    let modRolesss = message.guild.roles.find("name", "Co-Owner");
        if (args[1]) {
    if(message.member.roles.has(modRolesss.id)) {
  message.channel.sendMessage(`**NOTICE** **ANTI-SWEAR MODULE HAS BEEN TURNED ON!!**`)
} else if (args[1] === "off") {
  guilds[message.guild.id].as=0; //sets it to 0
  message.channel.sendMessage(":x: **TURNED OFF ANTI-SWEAR MODULE** :x:")
} else {
  message.channel.sendMessage(":x: **INVALID USAGE!** Usage: ${prefix}antiswear on/off");
}
} else {
	message.reply(":x: You have missing permissions: **ADMINISTATOR**! :x:");
}
break;
case "antiinvite":
    let modRolesss = message.guild.roles.find("name", "Co-Owner");
        if (args[1]) {
    if(message.member.roles.has(modRolesss.id)) {
  message.channel.sendMessage(`**NOTICE** **ANTI-DISCORD-LINKS MODULE HAS BEEN TURNED ON!!**`)
} else if (args[1] === "off") {
  guilds[message.guild.id].advert=0; //sets it to 0
  message.channel.sendMessage(":x: **TURNED OFF ANTI-DISCORD-LINKS MODULE** :x:")
} else {
  message.channel.sendMessage(":x: **INVALID USAGE!** Usage: ${prefix}antiadvert on/off");
}
} else {
	message.reply(":x: You have missing permissions: **ADMINISTATOR**! :x:");
}
break;


bot.login(process.env.BOT_TOKEN);
