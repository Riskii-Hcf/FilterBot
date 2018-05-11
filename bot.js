
const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
const hastebin = require('hastebin-gen');
const ads = require('./ads.js'); 
const swears = require('./swears.js'); 
var token = "no token, just stop looking at token ffs lol";
var guilds = {};

bot.on("ready", function() {
	  bot.user.setGame("http://aloid.tk | (help", "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});

//===========================================

bot.on("guildMemberAdd", function(member) {

let joinleave = member.guild.channels.find("name","join-leave");
let memberRole = member.guild.roles.find("name", "Member");

if(!joinleave) return;
if(!memberRole) return;

joinleave.send(`:tada: Welcome **` + member.toString() + `** to ${member.guild.name}! Our membercount is: **${member.guild.members.size}**!`);
member.addRole(memberRole.id);
});

bot.on("guildMemberRemove", function(member) {

let joinleaves = member.guild.channels.find("name","join-leave");

if(!joinleaves) return;

joinleaves.send(`Oh no... **` + member.toString() + `** left. Our membercount is now **${member.guild.members.size}** :frowning:`);
});
//============================


bot.on("message", function(message) {
  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "(",
              advert: 0,
			  antiswear: 0,
          };
      }
  } catch (e) {
    console.log(e);
  }

  const advert = guilds[message.guild.id].advert;

	if (advert === 1) { //detects if antiswear is on or not
  var string = message.content;
  var lower = string.toLowerCase();
  for (i = 0; i < 554; i++)
  {
      if (lower.indexOf(ads.list[i]) >= 0)
      {
          if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
			  //admins can advertise.
         } else {
          message.delete();
          message.reply(":x: You are not allowed to advertise.")
          //userData.swears++;
          break;
}
      }
  }
}


function clean(text) {
  if (typeof(text) === `string`)
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
  else
      return text;
}

const as = guilds[message.guild.id].as;

if (as === 1) { //detects if antiswear is on or not
  var string = message.content;
  var lower = string.toLowerCase();
  for (i = 0; i < 554; i++)
  {
      if (lower.indexOf(swears.list[i]) >= 0)
      {
          if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
         } else {
          message.delete();
          message.reply(":x: You are not allowed to swear.")
          //userData.swears++;
          break;
}
      }
  }
}

var animepics = [
  'https://cdn.discordapp.com/attachments/409118997305622529/409792198671073280/Capture.PNG',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793133006815252/9e2dece20151845674870f36e0e5350402e660c3_hq.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793166292549652/79e80478f9996d39a081fc118e4ebcc0.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793206398484491/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793252691279872/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793273318735873/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793299226820609/812811c91bb75f942a8a1b20e7cc73fb.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793317627363329/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793359402500106/3760262.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793434451443712/aa26f348c73960481be1b1efff191522678d912a_hq.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793556866400257/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793571085090816/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793595730690048/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793649040293898/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793664236388352/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793747694518272/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409793937625055232/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409794051760717844/zjWm8ky5.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409794057011986432/images.png',
  'https://cdn.discordapp.com/attachments/409118997305622529/409794136208572426/images.png',
];

var h = [
  'https://simg3.gelbooru.com/images/95/68/9568145f22350f7acfc8efb54d6f694e.jpeg','https://files.yande.re/image/ce8e14c0b8919994e8c57152e3c7b8f6/yande.re%20432859%20censored%20fate_grand_order%20feet%20mash_kyrielight%20naked%20nipples%20pussy%20pussy_juice%20remana.jpg',
  'https://simg3.gelbooru.com/images/ef/e8/efe83f21c2d222b68559bd2816aef4e8.png',
  'https://danbooru.donmai.us/data/__megumin_kono_subarashii_sekai_ni_shukufuku_wo_drawn_by_apoidea__b31ab36f6e4b62102e81a4f92cbeb9b0.jpg',
  'https://konachan.com/image/54eaeb126270dffe405042bffa46a3e9/Konachan.com%20-%20259982%20ass%20ass_grab%20bed%20brown_hair%20green_eyes%20gyouza_teishoku%20naked_shirt%20original%20sex%20short_hair.png',
  'https://files.yande.re/image/1a4d3fafcb34a269d7d203370168c507/yande.re%20432823%20anus%20ass%20ass_grab%20monster%2Bmusume%20monster_girl%20nipples%20pantsu%20pointy_ears%20pussy%20sayori%20thong%20topless.jpg',
  'https://simg3.gelbooru.com/images/4c/7b/4c7b8a289d8b0a74073bc2debe27ed38.gif',
  'https://danbooru.donmai.us/data/__hakurei_reimu_and_sananana_cookie_touhou_and_touhou_drawn_by_oozon_ozon__83d50be518f74ca31d5a38bca8c56d0a.png',
  'https://konachan.com/image/0b7c462faad96aadad4f9b09f2b5c91f/Konachan.com%20-%20259325%20anus%20ass%20ass_grab%20creampie%20cum%20game_cg%20green_eyes%20green_hair%20hunie_pop%20long_hair%20ninamo%20theiatena_venus%20uncensored.jpg',
  'https://files.yande.re/image/a2d9643fb870bd5c3684f48681b6b0e0/yande.re%20433012%20boku_wa_tomodachi_ga_sukunai%20breasts%20cait%20kashiwazaki_sena%20kimono%20nipples%20no_bra%20nopan%20open_shirt%20pussy%20uncensored.png'];

var parseTime = function(milliseconds) {
  var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
  var minutes = Math.floor(seconds/60); seconds %= 60;
  var hours = Math.floor(minutes/60); minutes %= 60;
  var days = Math.floor(hours/24); hours %= 24;
  var written = false;
  return (days?(written=true,days+` days`):``)+(written?`, `:``)
      +(hours?(written=true,hours+` hours`):``)+(written?`, `:``)
      +(minutes?(written=true,minutes+` minutes`):``)+(written?`, `:``)
      +(seconds?(written=true,seconds+` seconds`):``)+(written?`, `:``)
      +(milliseconds?milliseconds+` milliseconds`:``);
};


  const prefix = guilds[message.guild.id].prefix;

  const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

  if (message.author.bot) return;

  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(prefix)) return;
  
  if(message.channel.type === 'DM') return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLowerCase()) {
    case "eval":
    if(message.author.id == "395954014715510784") {
      try {
        const code = args.join(` `);
        let evaled = eval(code);
  
        if (typeof evaled !== `string`)
          evaled = require(`util`).inspect(evaled);

        const embed = new Discord.RichEmbed()
        .setTitle(`Evaluating...`)
        .setColor(hexcols[~~(Math.random() * hexcols.length)])
        .setDescription(`Input:\n${code}\n \nOutput:\n${clean(evaled)}`);
        message.channel.send({embed});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
    } else {
      message.reply("Really? Eval? Heh, nice try tho.");
    }
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
