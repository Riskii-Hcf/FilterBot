const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "Hell Nah";
 
var prefix = '!';

const swears = require('./swears.js'); 

bot.on("ready", function() {
      bot.user.setGame("Filter Prefix = !" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","main-chat");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
}); 
		
case "mc":
if (args[1]) {
 var mcskin = new Discord.RichEmbed()
.setTitle(`Minecraft Information`)
.setDescription(`Welcome back ` + args[1] + `! Here is some information about you:`)
.addField(`Username:`, args[1], true)
.addField(`Skin:`, `https://minecraftskinstealer.com/skin.php?u=`+ args[1] +`&s=700`, true)
.addField(`Use this skin to your account:`, `[Click Me!](https://www.minecraft.net/profile/skin/remote?url=https://minecraft.net/skin/` + args[1] + `.png)`)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setThumbnail(`https://minotar.net/avatar/`+ args[1] + `/100.png`)
.setColor(0x721487)
message.channel.sendEmbed(mcskin);
} else {
message.reply("Please enter a nickname!");
}
break;
case "antiinvite":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
if (args[1] === "on") {
  guilds[message.guild.id].advert=1; //sets it to 1
  message.channel.sendMessage(`<:aloid_09:406932185371901964> **ANTI-DISCORD-LINKS MODULE HAS BEEN TURNED ON!!**`)
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
case "antiswear":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
if (args[1] === "on") {
  guilds[message.guild.id].as=1; //sets it to 1
  message.channel.sendMessage(`<:aloid_09:406932185371901964> **ANTI-SWEAR MODULE HAS BEEN TURNED ON!!**`)
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
case "purge":
async function purge() {
  message.delete(); 
  if(!message.guild.member(message.author).hasPermission(`MANAGE_MESSAGES`)) {
      message.reply(`:x: You have missing permissions: **MANAGE_MESSAGES**! :x:`);
      return;
  }

  if (!args[1]) {
      message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); 
      return;
  }
message.delete();
  const fetched = await message.channel.fetchMessages({limit: args[1]});
  console.log(fetched.size + ' messages found, deleting...');
  message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`Error: ${error}`));

}
purge();
break;
		  
bot.login(process.env.BOT_TOKEN);
